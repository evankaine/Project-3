# imgNation


## Project Description

imgNation is an MongoDB and React build social media platform where the user is able to make an account, sign in and start posting photos to share on the site. From the homepage, the user is able to view all posts on the platform and have the ability to like others photos. Clicking on or searching a users name will bring you to their profile page and you will be able to view all posts by that user.

## Wireframes


![imageAlt](https://imgur.com/MmJToW7.png)
![imageAlt](https://imgur.com/ZnQ0ZNC.png)
![imageAlt](https://imgur.com/5TAjfjc.png)

## Component Hierarchy

![imageAlt](https://imgur.com/Abe8dk5.png)

## Schemas

```
const postSchema = new Schema ({
    username: { type: String, required: true },
    imgURL: { type: String, required: true },
    caption: { type: String, required: true },
    user_id: { type: Schema.Types.ObjectId, ref: 'User' }
    },
    { timestamps: true }
)

module.exports = mongoose.model("Post", postSchema) 

const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema ({
    username: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    posts: [{type: Schema.Types.ObjectId, ref: "Post"}]
    },
    {timestamps: true}
)

module.exports = mongoose.model("User", userSchema) 
```

### MVP/PostMVP

#### MVP

- Create Account
- Make posts
- Sign out
- Profile Page

#### PostMVP

- Like Button 
- Messaging 
- Add Friend
- Interest Lists

## Project Schedule

| Day      | Deliverable                                | Status     |
| -------- | ------------------------------------------ | ---------- |
| Aug 2    | Proposal Approval / Backend Setup          | Incomplete |
| Aug 3    | Backend / Create, Read, Update, and Delete | Incomplete |
| Aug 4    | React Logic                                | Incomplete |
| Aug 5    | CSS Styling / MVP                          | Incomplete |
| Aug 6    | Advanced CSS / Post-MVP                    | Incomplete |
| Aug 9    | Presentations                              | Incomplete |

## Timeframes

| Component                 | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------------- | :------: | :------------: | :-----------: | :---------: |
| Proposal                  |    H     |      ----      |     -----     |    -----    |
| Backend setup             |    H     |      ----      |     -----     |    -----    |
| Authentication            |    H     |      ----      |     -----     |    -----    |
| React Logic               |    H     |      ----      |     -----     |    -----    |
| Landing Screen            |    H     |      ----      |     -----     |    -----    |
| Lisitng Screen            |    H     |      ----      |     -----     |    -----    | 
| Detail Screen             |    H     |      ----      |     -----     |    -----    |
| Form/post creation        |    H     |      ----      |     -----     |    -----    |
| Data/update(edit post)    |    H     |      ----      |     -----     |    -----    |
| Componenet Home Page      |    H     |      ----      |     -----     |    -----    |
| Componenet Profile Page   |    H     |      ----      |     -----     |    -----    |
| Component CSS Home        |    H     |      ----      |     -----     |    -----    |
| Component CSS Profile     |    H     |      ----      |     -----     |    -----    |
| Like Button Function      |    H     |      ----      |     -----     |    -----    |
| Friends Page              |    H     |      ----      |     -----     |    -----    |
| Messages                  |    H     |      ----      |     -----     |    -----    |
| UI / UX                   |    H     |      ----      |     -----     |    -----    |
| Total                     |    H     |      ----      |     -----     |    -----    |

## SWOT Analysis

### Strengths:

Evan - Styling / React UI 
Chris - React / CSS styling / JavaScript
Diego - CSS/React
Henry - React/JS/Css/Layouts

### Weaknesses:

Evan - Authentication / Backend 
Chris - Backend / Authentication
Diego - DB general 
Henry - Authentication / DB / Backend

### Opportunities:

Growth on our backend skills

### Threats:

not letting the backend eat up to much of our time
