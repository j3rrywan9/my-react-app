# Learn React for Modern Web Applications

## Introduction

## Lesson 1

### Understand the purpose and benefits of React

React as an open-source, front-end JavaScript library that was originally created by Facebook and still continues to be maintained by them as well as the open source community.
React helps developers quickly create maintainable performant applications.
And as we'll see throughout this course, it abstracts away a lot of the nitty gritty details associated with front-end development, and in particular with efficiently rendering web pages and updating them to reflect changes in the underlying data.
React also allows developers to create modular components that can be used throughout our applications, which can drastically reduce the amount of code we end up writing.
And among some of the other benefits of React is the fact that as I mentioned, it's written in JavaScript.

### Create and run a React app

Now it is possible to create a React app completely from scratch.
But there's a lot of Boilerplate code involved in this setup process.
So what we usually do is use what's called a Boilerplate Generator.
This is a script that we can run to automatically create all the code for us.
And it's a pretty common thing in the front-end library universe with Angular, Ember, and Vue, all having their own selection of Boilerplate Generators as well.
With React, the most common Boilerplate Generator we use to create new projects is called Create React app.
```
npx create-react-app my-react-app --use-npm
```
The public folder, like the public folder on a static site, contains things that we want the client visiting our site to be able to access such as HTML files, photos, and other things such as this robots.txt file here, and the manifest.json file which is used when Android users save our site as an app on their phone.
But for now, our main point of interest is this `index.html` file here.
When a user visits our site, this is the file that their browser will receive, and in the React app, this is the page that our React app actually gets rendered into.
And specifically, it gets rendered into this root `div` here.
We'll talk more about this process later on, or you can always read about it in the comments in this file if you have time.

So moving on to our `src` folder, this is where the actual React code is.
The entry point for our React application is this `index.js` file.
If we open that up, we see this `ReactDom.render` function here.
This is the function where all the magic happens.
Where the actual React app that we've created is rendered into the HTML file we just saw.
Basically this function takes two arguments.
The first is the React components that we want to render on the page.
We'll talk more about this weird HTML-like syntax shortly.
And the second argument is the element on the page that we want to replace with our rendered app.
The most important thing here is this `App` component that we're rendering.
This will be the component that contains the rest of the components that we create in our React app.
And in case you haven't picked up on this yet, components are the basic units of organization in React apps.
We'll see how to define and use components very soon.
So for now let's take a look at the app component that the Create React app generator created for us, which is inside this `App.js` file.
If we take a look at our app component, we see more of this HTML-like syntax here.
This is called JSX.
And it's the way that we define how our components are rendered on the screen.
As I said we'll go into much more detail about JSX.
And for that matter how components work in general in a little bit.
Note that we also have the styling for our app component which is contained inside a CSS file.
And we also have this test file, which is where we put any tests for our component.
Now styling is something that we're gonna be talking about later on in the course.
But testing React applications is an incredibly broad topic.
And it's really beyond the scope of this course.
Okay, so that's about it for our code walkthrough.
Now it's time to actually run this app.
The way we run our React app is by opening up a terminal inside our directory, and typing `npm run start` or you can just do `npm start` if you want to, and then hitting Enter.
And this will open up a new browser window for us at http://localhost:3000.
And inside it we'll see the app that Create React app generated for us.
Now this is pretty cool so far, but why don't we try and change something in the code.
For example, let's change this message here to our own string.
So to do that, we're gonna go back to our app.js file. And we're gonna find this Edit source `App.js` and save to reload thing and just replace it with our own message.
And when we do that and save our code, we see that the change is immediately reflected in the browser.

### Write your first JSX

So let's get back to this JSX syntax that React uses so extensively.
At first glance, it looks an awful a lot like HTML, especially the JSX that we have here, since it only uses `div`, `p` and other common HTML tags.
However, JSX goes beyond HTML.
We'll see many examples of this throughout the course.
But one of the first ways this is true is that JSX allows us to use other components we've defined as tags.
As we saw in the `index.js` file, we're importing our `App` component up here, and then using JSX syntax to render it to the page along with this `React.StrictMode` thing, which is its own component as well, although we're not gonna go into what `StrictMode` is right now.
As we'll see shortly, when we learn how to define our own components, We'll be able to use this JSX syntax to display the components we create inside the app component.
So for example, if we were to create a `TodoList` component, we could display that on our app component, something like this.
We could say `TodoList`.
```html
<TodoList />
```
Now, that wouldn't work because that component doesn't exist right now.
But you get the point.
Another nice thing about JSX is that it's not a separate thing from JavaScript.
What I mean by that is that we can assign JSX expressions to JavaScript variables, and then use JavaScript logic to help structure and restructure our pages.
```js
let isMorning = (new Date()).getHours() < 12
let greetingElement = isMorning ? <h3>Good Morning!</h3> : <h3> Good Evening!</h3>
```
And what we could do is we could then insert this greetingElement into the rest of our components JSX like this.
Up at the top above the image, we could say, in curly braces, we could say `greetingElement` and the brackets that we're using here are how to insert the values of variables and expressions into our JSX.
Now note that we can put regular strings into our JSX in a very similar way to what we're used to doing in HTML, in order to put the this is so cool message here for example, we don't need any special kind of syntax and to pass strings to element variables such as class name, as we see here.
Just as a side note, React uses class name instead of class to avoid clashing with JavaScript spelt in class keyword.
But when we're passing strings as attributes, we just have to surround the string we're passing with quotation marks.
However, when we have a variable whose value we want to insert into the page, such as this `greetingElement` thing here, even when that variable is a string, or JSX, we have to wrap it in curly braces to actually insert that into our JSX.
And just one last thing, this curly braces thing goes for inserting variables into attributes as well, we see that we're already doing that here with the SVG of the React logo that we're displaying.
But this could be used to pass pretty much any variable that we want.

### Create React components

Components are React's basic units of organization.
They're reusable collections of elements and functionality that usually represent conceptually distinct pieces of our application.

So let's head over to our editor here and there are two main ways to create components in React.
One way is by using classes and the syntax for that looked like this.
If we wanted to redefine our app component right here for example, we might say `class App extends React.Component`.
And up until recently, this was the main way to create components.
However, it's now been sort of eclipsed by a different way of defining components.
And just as a side note here, we're gonna go over the class-based syntax for defining components later on in the course but for now, we're gonna look at the more modern and preferred way of defining React components and that's by using what's called functional component syntax.
Functional component syntax is what we've seen so far in our application and the `App` component here is a prime example of it. Basically, components that we define in this way are just functions that return some JSX that will be displayed in the browser when that component is rendered.
We see here that inside our app component, we're just returning some JSX.
And we're gonna go into more detail on exactly how components work in a little bit, but for now, let's walk through the process of creating and displaying our own component.
This will be the best way to solidify your understanding of components so far.
So first, we're gonna create another file in our source directory called `Greeting.js` and just as a note, we usually just name our files the same thing as the component they contain and it's usually considered a best practice to only export one React component per file.
Anyway, once we've created that `Greeting.js` file, we're gonna define our new component called `Greeting` and remember, functions are how we define components in React, so we're gonna say function `Greeting`, and then this `Greeting` function will return the JSX that we want to be displayed when this component is rendered.

The next thing I wanna draw your attention to with components is this export statement for our Greeting component.
I mentioned before that we generally only want to export one component per file, which means that there's really no problem in saying that all the components in a React application will be just the default export of the file they're contained in as we've done here.
However, the other option is to export all of our components as named exports from their respective files, which would look like this.
We would just say `export function Greeting`, and then in whatever we're importing this component into, for example, our `App` component, we'd have to say import and then surround Greeting in curly braces from `Greeting`.
```js
import { Greeting } from './Greeting';
```
Now you might be wondering why we'd wanna do things this way and here's the reason, exporting our components as named exports instead of as the default export forces us to maintain the same name for this component wherever it's used.
Remember that in JavaScript, we're allowed to rename default exports without explicitly doing so.
So if our `Greeting` component was the default export from its file, we wouldn't actually have to call it `Greeting` in the file we were importing it into, we could call it something like `GreetingMessage`, or we could call it something like `HelloComponent`, or we could call it anything we wanted to basically.
And the problem with this is that in React projects, especially larger ones, there'll be many times when we wanna find all the places where a given component in our project is used.
If the component is called the same thing everywhere, this is really easy.
We can simply do a global find, right?
Otherwise, it's a little more tedious.
And it's for this reason that in my own React projects, I almost always use named exports instead of default exports.
Granted, in JavaScript you're allowed to rename named exports as well, but it's more explicit, right?
You have to use the `as` keyword like this.
So say `import { Greeting as GreetingMessage }` or whatever we wanted to call it.
See, what usually happens to me when I use default exports is that I end up renaming my exports by accident.
So I might accidentally say `Greetings` or I might accidentally forget a T or I might accidentally add to T's or whatever.
And maybe that's just me, if you've never had that problem before, then you're free to pick whatever export scheme you're most comfortable with, that's just my recommendation, but for now, I'm gonna be using named exports.

Now, the last thing I wanna mention about components here is that while both our `App` and `Greeting` components are currently defined using this `function` keyword here, we're more than welcome to define them using *arrow function* syntax and in fact, this is the way that I almost always do it when I can.
So instead of defining our `Greeting` component like this, we could just say `export const Greeting =` and then use arrow function syntax, which I personally think looks a little nicer.
And of course, in the case where the body of our component is only one statement, in other words, when the body of our component doesn't contain any logic that comes before the `return` statement, we're allowed to drop the curly braces around the function body, along with the `return` keyword.

### Pass props to components

The next component related thing we're gonna look at here is something called *props*.
This is where the real advantage of reusable components really starts to become more apparent.
React components can take props which are attributes that we can pass into our components to change something about them.
Remember that we have to use the curly braces for any prop value we're passing that's not a string.
But on the other side of things, we have to make our components actually do something with these props in some way.
Now accessing the props from inside a component is pretty simple.
Our component receives an object containing all the props that its parent component is passing to it as an argument, which we can call `props` here.
And as I said this `props` argument is an object that contains all the props and their values.
This might not make complete sense to you yet so a simple way to clear things up for us is simply to print this object to the console.
So we'll just say `console.log(props)`.
And now if we save our changes and take a look at the console in our browser's Developer Tools, we see that `props` is an object with they key's name and number of messages and the corresponding values that we passed in from our `App` component.
