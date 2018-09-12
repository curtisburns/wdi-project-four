const { dbUri } = require('../config/environment');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect(dbUri);

// Require models
const User = require('../models/user');
const Course = require('../models/course');
const Page = require('../models/page');
const Quote = require('../models/quote');


// Seed data
const userData = [{
  username: 'curtis',
  email: 'curtis@curtis.com',
  password: 'pass',
  countryOfResidence: 'United Kingdom'
}];

const courseData = [{
  title: 'Introduction to Physics (Series) - Atomic Physics - Part One',
  subject: 'Science',
  imageUrl: 'https://media.istockphoto.com/vectors/vector-atom-icon-isolated-on-white-background-vector-id611628288?k=6&m=611628288&s=612x612&w=0&h=gzON2nbKsJBhoya-BEwWDM_y-EOwTUVdt_3GTc9fTEc=',
  description: 'This covers the basics of Atomic Physics, etc etc.'
}];

const quoteData =
[{content: 'Teach self-denial and make its practice pleasure, and you can create for the world a destiny more sublime that ever issued from the brain of the wildest dreamer.',
  by: 'Sir Walter Scott'
},{
  content: 'It is the hardest thing in the world to be a good thinker without being a good self examiner.',
  by: 'Lord Shaftesbury'
},{ content: 'Learning is a treasury whose keys are queries.',
  by: 'Arabian Proverb'
},{ content: 'Liberty without learning is always in peril, and learning without liberty is always in vain.',
  by: 'John F. Kennedy'
},{ content: 'Virtue, though she gets her beginning from nature, yet receives her finishing touches from learning.',
  by: 'Quintilian'
},{ content: 'If you think education is expensive, try ignorance.',
  by: 'Bumper Sticker'
},{ content: 'Education is the chief defense of nations.',
  by: 'Edmund Burke'
},{ content: 'The things taught in schools and colleges are not an education, but the means of education.',
  by: 'Ralph Waldo Emerson'
},{ content: 'Education is the mother of leadership.',
  by: 'Wendell Willkie'
},{ content: 'Education is that which remains when one has forgotten everything he learned in school.',
  by: 'Albert Einstein'
},{ content: 'Natural ability without education has more often raised a man to glory and virtue than education without natural ability.',
  by: 'Cicero'
},{ content: 'The great aim of education is not knowledge but action.',
  by: 'Herbert Spencer'
},{ content: 'The two basic processes of education are knowing and valuing.',
  by: 'Robert J. Havighurst'
},{ content: 'Character development is the great, if not the sole, aim of education.',
  by: 'William O’Shea'
},{ content: 'The roots of education are bitter, but the fruit is sweet.',
  by: 'Aristotle'
},{ content: 'I never let my schooling interfere with my education.',
  by: 'Mark Twain'
},{ content: 'Education is the ability to listen to almost anything without losing your temper or your self-confidence.',
  by: 'Robert Frost'
},{ content: 'Nations have recently been led to borrow billions for war; no nation has ever borrowed largely for education.',
  by: 'Abraham Flexner'
},{ content: 'Education makes a people easy to lead, but difficult to drive; easy to govern, but impossible to enslave.',
  by: 'Henry Brougham'
},{ content: 'One of the chief objects of education should be to widen the windows through which we view the world.',
  by: 'Arnold Glasow'
},{ content: 'The test and the use of man’s education is that he finds pleasure in the exercise of his mind.',
  by: 'Jacques Barzun'
}];

// const pageData = [{
//
// }]

// Drop collections on seed
User.collection.drop();
Course.collection.drop();
Page.collection.drop();
Quote.collection.drop();

User.create(userData)
  .then(users => {
    console.log(`Created ${users.length} user(s)!`);
    courseData[0].createdBy = users[0]._id;
    return Course.create(courseData);
  })
  .then(courses => {
    console.log(`Created ${courses.length} course(s)!`);
    return Quote.create(quoteData);
  })
  .then(quotes => console.log(`Created ${quotes.length} quote(s)!`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
