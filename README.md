<p align="center">
  <img src="https://user-images.githubusercontent.com/77505989/205430534-ca4a1acf-5839-49a8-b871-2be3119f3b27.png" alt="BANNER" />
</p>

A React-based portfolio website for developers who **are/aren't** in Website Development. **Super Customizable** with Tailwind CSS styling. Make it your portfolio. Fork it. Use it.

## Setup instructions
1. Fork the repository.
2. Clone it in your system using `git clone <URL.git>`.
3. In the project directory, open the terminal and run `npm install`.
4. Run `npm start`. You should be able to see the [website](https://open-portfolio.netlify.app) like this.

## Update your details
There are only **two files** in which you have to change the data.

1. Go to `/src/constant/data.js` and edit the details.
```javascript
export const data = {
    name: "John Doe",
    tagline:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et aliqua.",
    resume: "https://www.google.com",

    skills: [
    ...
```

2. Go to `/src/components/Home/Salutation.jsx` and update the positions.
```javascript
export default function Salutation() {
    return (
        <TypeMe
            loop="True"
            typingSpeed="200"
            cursorCharacter=""
            strings={[
                "Position 1",
                <Delay ms={2000} />,
                <Delete characters={10} />,
                "Position 2",
                <Delay ms={2000} />,
                <Delete characters={10} />,
                "Position 3",
                <Delay ms={2000} />,
                <Delete characters={10} />,
                "Position 4",
                <Delay ms={2000} />,
                <Delete characters={10} />,
            ]}
        />
    );
}
```

> **Warning**
> Make sure that the length of your `position` and `delete character` must be equal. ["**position 1**" is equal to length **10**]

## Deployment
1. Login to [Netlify](https://www.netlify.com).
2. Click on **Add new site** & then **Import an existing project**.
3. Connect your git provider - **Select GitHub**.
4. Select your **forked repository**.
5. Click on **Deploy Site**.
6. Explore Netlify to edit further details.

<h3 align="center">
  Made & open-sourced with ❤️ by <a href="https://www.kartikmehta.xyz">kartikmehta8</a>
</h3>
