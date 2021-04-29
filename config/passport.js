const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const bcrypt = require('bcrypt');
const dbService = require('../services/db.service');
const userService = require('../api/user/user.service');
const ObjectId = require('mongodb').ObjectId;
// const users = dbService.getCollection('user')

passport.serializeUser((user, cb) => {
    console.log('serializeUser');
    cb(null, user._id);
});

passport.deserializeUser((id, cb) => {
    console.log('deserializeUser');
    userService.getById(id).then(user => {
        cb(null, user);
    });
});

/**
 * Sign in using Email and Password.
 */
passport.use(
    new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
        const users = await dbService.getCollection('user');
        users.findOne({ email: email.toLowerCase() }, async (err, user) => {
            if (err) {
                return done(err);
            }
            if (!user) {
                return done(null, false, { message: `Email ${email} not found.` });
            }
            if (!user.password) {
                return done(null, false, { message: 'Your account was registered using Google sign-in provider, sign in again with Google' });
            }
            const match = await bcrypt.compare(password, user.password);
            if (match) {
                return done(null, user);
            } else {
                return done(null, false, { message: 'Invalid email or password.' });
            }
        });
    })
);

passport.use(
    new GoogleStrategy(
        {
            clientID: '287380028312-r34cm81i3g140bl8t335v1k3ctudl83j.apps.googleusercontent.com',
            clientSecret: 'vpv4nJiZVCfwiloNdAqaQ7Je',
            callbackURL: 'http://localhost:3030/auth/google/callback',
        },
        async (req, accessToken, refreshToken, profile, cb) => {
            const users = await dbService.getCollection('user');
            users.findOne({ google: profile.id }, (err, existingUser) => {
                if (err) {
                    return cb(err);
                }
                if (existingUser) {
                    return cb(null, existingUser);
                }
                console.log('profile', profile);
                users.findOne({ email: profile.emails[0].value }, async (err, existingEmailUser) => {
                    if (err) {
                        return cb(err);
                    }
                    if (existingEmailUser) {
                        users.findOne(existingEmailUser._id, async (err, user) => {
                            if (err) {
                                return cb(err);
                            }
                            user.google = profile.id;
                            user.username = user.username || profile.displayName;
                            user.profileImg = user.profileImg || profile._json.profile_image_url;

                            try {
                                const updatedUser = await userService.update(user);
                                cb(null, updatedUser);
                            } catch (err) {
                                console.log('ERR:User cannot be saved');
                                cb(err);
                            }
                        });
                    } else {
                        const newUser = {
                            username: profile.displayName,
                            google: profile.id,
                            profileImg: profile._json.profile_image_url,
                            email: profile.emails[0].value,
                        };
                        users.insertOne(newUser).then(() => cb(null, newUser));
                    }
                });
            });
        }
    )
);

// passport.use(
//     new GoogleStrategy(
//         {
//             clientID: '287380028312-r34cm81i3g140bl8t335v1k3ctudl83j.apps.googleusercontent.com',
//             clientSecret: 'vpv4nJiZVCfwiloNdAqaQ7Je',
//             callbackURL: "http://localhost:3030/api/auth/google/callback"
//         },
//         async (accessToken, refreshToken, profile, cb) => {
//             try {
//                 const users = await dbService.getCollection('user')
//                 const newUser = {
//                     // _id: ObjectId(profile.id),
//                     username: profile.displayName
//                 };
//                 users.insertOne(newUser)
//                     .then(() => cb(null, newUser));
//             } catch (err) {
//                 console.log('err', err)
//                 cb(err)
//             }
//         }
//     )
// );
