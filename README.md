<div align="center">
  <img src="#" style="background-color: black" alt="Oh no Lola pic">
</div>
<div align="center">
  <img src="#" alt="Home Page">
</div>

![oh no Lol](assets/images/logo.webp)

This project challenged me in ways I hadn't anticipated. Learning JavaScript has been akin to acquiring a new language, requiring both time and perseverance. While I believe the time allocated to this subject was somewhat limited, I hope the final result reflects the effort invested. 

My brother, a teacher, has often highlighted one of the major issues facing today’s younger generation: comprehension. The question, "Do you understand what you just read?" is one that frequently arises in the classroom. With this in mind, I sought to create an engaging story filled with dynamic characters—an approach designed to enhance reading comprehension while simultaneously improving vocabulary skills.

Each section of the story is followed by a quick quiz to test comprhension. It was planned in this manner, firstly to reduce the quantity of information that needs to be worked through and secondly to keep the readers attention.


## Table of Contents
1. <details open>
    <summary><a href="#user-design">User Design</a></summary>

    <ul>
    <li><details>
    <summary><a href="#goals">Goals</a></summary>

    - [Visitor Goals](#visitor-goals)
    - [Business Goals](#business-goals)
    </details></li>

    <li><details>
    <summary><a href="#visual-design">Visual Design</a></summary>

    - [Wireframes](#wireframes)
    - [Fonts](#fonts)
    - [Icons](#icons)
    - [Colors](#colors)
    - [Images](#images)
    - [Styling](#styling)
    </details></li>
    </ul>
</details>

1. <details open>
    <summary><a href="#features">Features</a></summary>

    <ul>
    <li><details>
    <summary><a href="#page-elements">Page Elements</a></summary>

    
    - [Index Page](#index-page)
    - [Games Page](#games-page)
    - [Contact Page](#contact-page)
    </details></li>

    <li><details>
    <summary><a href="#additional-features">Additional Features</a></summary>

    - [Multiple choice questionare](#multiple-choice-questionare)
    - [Contact Form](#contact-form)
    </details></li>

    <li><details>
    <summary><a href="#feature-ideas">Feature Ideas</a></summary>

    - [Basic](#basic)
    - [Content](#content)
    </details></li>
    </ul>
</details>

1. <details open>
    <summary><a href="#technologies-used">Technologies Used</a></summary>

    - [Languages](#languages)
    - [Frameworks](#frameworks)
    - [Libraries](#libraries)
    - [APIs](#apis)
    - [Platforms](#platforms)
    - [Other Tools](#other-tools)
</details>

1. <details open>
    <summary><a href="#testing">Testing</a></summary>

    <ul>
    <li><details>
    <summary><a href="#methods">Methods</a></summary>

    - [Validation](#validation)
    - [General Testing](#general-testing)
    - [Mobile Testing](#mobile-testing)
    - [Desktop Testing](#desktop-testing)
    </details></li>

    <li><details>
    <summary><a href="#bugs">Bugs</a></summary>

    - [Known Bugs](#known-bugs)
    - [Fixed Bugs](#fixed-bugs)
    </details></li>
    </ul>
</details>

1. <details open>
    <summary><a href="#deployment">Deployment</a></summary>

    <ul>
    <li><details>
    <summary><a href="#local-deployment">Local Deployment</a></summary>

    - [Local Preparation](#local-preparation)
    - [Local Instructions](#local-instructions)
    </details></li>

    <li><details>
    <summary><a href="#github-deployment">Github Deployment</a></summary>

    - [Github Preparation](#github-preparation)
    - [Github Instructions](#github-instructions)
    </details></li>
    </ul>
</details>

1. <details open>
    <summary><a href="#credit-and-contact">Credit and Contact</a></summary>

    - [Content](#content)
    - [Contact](#contact)
</details>

----

# UX
## Goals
### Visitor Goals
The target audience for Horizon Photography are:
- People who want to view beautiful photos.
- People who are interested in seeing different countries.
- People that may want to license a photo.
- People interested in hiring a photographer.
- People interested in the photographer's travels.

User goals are:
- View a gallery of different photos.
- Explore different countries on the map to see what they look like.
- Contact the photographer.
- Get an overview of a country's statistics.
- Follow the photographer's journey.

Horizon Photography fills these needs by:
- Opening with a dramatic image and introducing the photographer immediately.
- The map and gallery are highlighted on the main page to lead users to the images wherever they click.
- Highlighting the Contact page in the header and footer.
- Providing social media links to follow the photographer.
- 500px link allows a user to license photos.
- Providing an interactive map with an info-box that displays country info from an API
- Showing beautiful images related to each country when clicked.
- Utilising [EmailJS](https://www.emailjs.com/) to maintain the contact page and the newsletter.

### Business Goals
The Business Goals of Horizon Photography are:
- Display and highlight the photographer's work in a unique way.
- Gain subscribers through the newsletter.
- Provide easy ways to communicate with the photographer.
- Gain interest and connect with social media.
- Connect to where the photos are sold.

### User Stories
1. As a user interested in photography, I expect to see lots of different beautiful photos.
0. I expect the photos to be highlighted first and foremost.
0. As a user interested in travel, I expect to see different countries on display.
0. As a user interested in different countries, I expect to see information on the countries.
0. As a person interested in hiring a photographer, I expect to find an easy way to contact the photographer.
0. I expect to hear a little about the photographer if I am interested.
0. I expect to be able to follow the photographer through social media.
0. I would like to be able to hear about the photographer's updates through social media.
0. If I were interested in buying a photo, I expect to know where.

## Visual Design
### Wireframes
Wireframes: https://drive.google.com/drive/folders/1WwDSap35rXV1i8_9hCPBqiXvpMdoFJsQ?usp=sharing

### Fonts
<div align="center">
  <img src="https://user-images.githubusercontent.com/44118951/92331221-6f750000-f075-11ea-8096-288bcc957e33.png" alt="Fonts">
</div>

- The primary font, [Montserrat](https://fonts.google.com/specimen/Montserrat#standard-styles) was chosen because it is standard, plain and informative but not too rigid. It looks friendly and conversational but holds a seriousness. It is also sans-serif, making it very easily readable throughout different color schemes and complementary to the font used for Headings.
- The secondary font, [Julius Sans One](https://fonts.google.com/specimen/Julius+Sans+One#standard-styles) was chosen because it is thin, elegant and refined yet it has flair. As a font, it gave me the impression of an art gallery. It is sans-serif, so it is clear, clean and simple, maintaining the idea of a minimalist aesthetic. It was chosen for headings as it is evident but doesn't distract, keeping the eyes more focused on the photography.

### Icons
<div align="center">
  <img src="https://user-images.githubusercontent.com/44118951/92331590-1fe40380-f078-11ea-814b-d15b413f59aa.png" alt="Icons">
</div>

- Icons are taken from the [Fontawesome](https://fontawesome.com/) Icon library and are utilised as classes in the `<i>` tag.
- As they are utilised as classes, they can easily be styled using other classes or IDs in the same tag. I often used Bootstrap classes to style them uniformly.
- Icons are utilised in the footer for social account icons and the "scroll-to-top" arrow on the gallery page.

### Colors
<div align="center">
  <img src="../oh-no-lola/documentation/colors.webp" alt="Color Pallette">
</div>

- As this site is dedicated to education, I chose the colors accordingly.
   - #f5b705 (Yellow): Yellow is often associated with positivity, energy, and happiness. It encourages creativity and optimism, which are essential for a learning environment.
   - #589dd9 (Blue): Blue represents trust, calmness, and reliability. These traits are important for an educational website to foster confidence and comfort among users.
                       Blue is known to improve focus and encourage a sense of stability, which can help users engage more deeply with the content.
   - #3f9004 (Green): Green symbolizes growth, learning, and harmony, which are directly connected to the goals of education.
   - #d99007 (Orange): Orange combines the energy of yellow and the stability of red, often representing enthusiasm and determination. It can be used to motivate users and 
                         create a sense of excitement about learning.

### Images
<div align="center">
  <img src="" alt="Images">
</div>



### Styling


----

# Features
## Page Elements
### All Pages
#### Navbar
<div align="center">
  <img src="" alt="Medium Header">
  <img src="" alt="Small Header">
</div>



#### Footer
<div align="center">
  <img src="" alt="Medium Footer">
  <img src="" alt="Small Footer">
</div>



### Index Page
#### Jumbotron Image
- Used as a splash image that highlights a dramatic photograph, representing a sense of adventure.
- An image with a person in it is used so the viewer can connect with it on a personal level.
- Uses the javascript lazy loading feature as the image is large and must show all at once for an impact
- Text is blurred and comes into view with the image to draw attention to the phrase.

#### About Section
<div align="center">
  <img src="https://user-images.githubusercontent.com/44118951/92338749-aae1ef80-f0b2-11ea-854d-6700642cdef9.png" alt="About">
</div>

- After the initial image to give a strong impact, the about section is presented in the contrasting accent color to make it stand out.
- Hopefully, the impact will create enough interest to read about the photographer.
- The section is responsive and the two columns will stack on resize.
- The section contains a fully responsive image and a small text section with responsively sized text.
- Contains a small link to a place where you can purchase or license photographs, highlighted and underlined in bold, this is in addition to the link in the footer.

#### Travel Gallery Link
- A full-width banner link that switches to brings the user to the gallery.
- Animated with CSS to draw attention on hover.
- Expands in size, seeming to exit from the page, and darkens the background to draw attention to the item.

### Gallery Page
<div align="center">
  <img src="https://user-images.githubusercontent.com/44118951/92344160-fd78d700-f0c5-11ea-9017-7046a210424f.png" alt="Gallery Page">
</div>

#### Interactive Map
<div align="center">
  <img src="https://user-images.githubusercontent.com/44118951/92340153-91907180-f0b9-11ea-857e-3a5edcc8f840.png" alt="Gallery Map">
</div>

- Uses the[Google Maps Javascript API](https://developers.google.com/maps/documentation/javascript/tutorial) to load an interactive map.
- All features utilise javascript.
- The [Google Maps Styling Wizard](https://mapstyle.withgoogle.com/) has been used to keep the map consistent with the site pallette.
- The map zoom level is set differently depending on the device screen size.
- Map markers are automatically generated and pull info from the [REST Countries API](https://restcountries.eu/).
- Adding a country name to the `countryName` variable in `map.js` will allow a marker to be created with an info window that has the country statistics already filled.
- `map.js` will automatically format the country info for the info window to be easily readable.
- The info window has been styled to be consistent with the other elements of the site.
- Content in the info window will automatically delete and refresh for each marker.
- The country information is used to swap the picture URLs in the gallery.
- Markers are animated to drop onto the map together.
- The selected marker has been set to animate on click and stop any other animated markers. A second click will stop the animation.
- After being clicked the page will briefly show the info window opening before smoothly scrolling down to the gallery automatically to carry the user to the images.
- After a short scroll down a little arrow will appear in the bottom right which can be used to scroll to the top of the page again.
- If the [REST Countries API](https://restcountries.eu/) is unreachable for any reason, the `markerArray.js` file is used to produce the markers.
- In the backup function, the info window is not generated as that required the API.


### Contact Page
<div align="center">
  <img src="https://user-images.githubusercontent.com/44118951/92344558-159d2600-f0c7-11ea-9e1d-836b5bc2586a.png" alt="Iframe Gallery">
</div>

- A simple page highlighting the author with a contact form that utilises [EmailJS](https://www.emailjs.com/) to send the emails.
- The form has validation and is fully responsive.
- Once the send button is pressed, a modal will open notifying the user that the message is sending.
- The modal has fields that are modified by the `sendMail.js` script.
- A success or an error message will be displayed depending on the result.
- The form fields will be cleared only on a successful response.
- A response message is sent to every email received, set up in EmailJS as a template.

## Additional Features
### Quiz 
- All images utilise a loading blur function to smooth out their loading as the high-quality images can slow things down.
- The function places a low-quality thumbnail as the default image, covering it with a CSS blur filter.
- Simultaneously, it loads the full quality image set as the background image. Once it detects it is loaded it adds a class.
- The class makes the thumbnail transparent, using animation to smooth the transition.
- Had to be carefully used to correctly open the image modal.

### Email
- EmailJS is functional on every page through the newsletter form.
- The newsletter form has all the same basic features, like the contact form; validation, the modal, success and error messages are all present.
- Differentiates between the contact page form for messages and the newsletter form.

## Feature Ideas
### Basic
- A selection of countries to click on that brings you directly to the gallery.
- The ability to share photos directly to social media.
- Purchasing on the site
- More details about countries.

### Content 
- A wider range of countries and images. At the moment I didn't want to clutter the map.
- The user selects a country and an API pull in relevant images of that location.
- An API wherein the placename and the blurb are automatically generated.
- Blog posts on the website for more flavour text.

----

# Technologies Used
## Languages
- [HTML](w3.org/standards/webdesign/htmlcss)
    * Page markup.
- [CSS](w3.org/standards/webdesign/htmlcss)
    * Styling.
- [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
    * Running functions for interactive components, AJAX, etc.

## Frameworks
- [Bootstrap5](https://getbootstrap.com/)
    * Used for basic styles and outline.

## Libraries

- [Google Fonts](https://fonts.google.com)
    * Font Styles.
- [Fontawesome](https://fontawesome.com/)
    * Used for icons
- [npm](https://cdn.jsdelivr.net/npm/js-confetti@latest/dist/js-confetti.browser.js)
    * Used for confetti


## Platforms
- [Github](https://github.com/)
    * Storing code remotely and deployment.
- [Gitpod](https://gitpod.io/)
    * IDE for project development.

## Other Tools
- [Balsamiq](https://balsamiq.com/)
    * To create wireframes.
- [Favicon Generator](https://www.favicon-generator.org/)
    * Favicons


----

# Testing
## Methods
### Validation
- HTML has been validated with [W3C HTML5 Validator](https://validator.w3.org/).
- CSS has been validated with [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) and auto-prefixed with [CSS Autoprefixer](https://autoprefixer.github.io/).
- Links checked with [W3C Link Checker](https://validator.w3.org/checklink).
- Each javascript file was tested on the site for errors and functionality using the console and with [JSHint](https://jshint.com/).

### General Testing
- Each feature was developed and tested in its own branch before being merged with master. Branches were subsequently deleted.
- Each time a feature was added, all the functions were tested to see if there was an impact.
- The site was sent to friends for feedback and testing.
- All forms have validation and will not submit without the proper information.
- .gitignore file has been included to prevent system file commits.
- The image loading blur has been thoroughly tested and gone through numerous iterations to optimise the smoothness of the transition on different devices and internet speeds.
- Backup Map functions have been tested in a local deployment.
- Email error functions have been tested offline as well.
- External links open in a new tab.

### Mobile Testing
- I tested the site personally on my Android device, going through the entire process, checking buttons, functions, checking out, etc. I was personally unable to test on iOS.
- The site was sent to friends and relatives for them to follow the same process. They have tested on their devices, including iOS.
- Chrome was utilised to inspect the site in mobile format, going through the pages and functions.

### Desktop Testing
- The site was developed on a Chromebook and, as such, the majority of testing occurred on Chrome.
- The site was tested by friends and relatives on numerous desktop devices.
- The site was marginally tested on other browsers, such as Firefox and Edge.
- Internet Explorer was not tested and the site was not developed with it in mind as support for the browser is gradually being dropped.

## Bugs
### Known Bugs

### Fixed Bugs

----

# Deployment
## Local Deployment
### Local Preparation
**Requirements:**
- An IDE of your choice, such as [github](https://github.com/)
- [Git](https://git-scm.com/)
- You will have to set up a connection with an email server through EmailJS:
- You will have to install SASS to compile the CSS. This depends on your system and your method choice. Please see the instructions [here](https://sass-lang.com/install).

### Local Instructions
1. Download a copy of the project repository [here](https://github.com/Ri-Dearg/neverlost-thrift/archive/master.zip) and extract the zip file to your base folder. Or you can clone the repository with:
    ```
    git clone https://github.com/Ri-Dearg/neverlost-thrift
    ```
    To disconnect it from the master repository, use:
    ```
    git remote rm origin
    ```
2. Open your IDE and choose the base directory.
3. Here you can install SASS with npm, if you choose, with:
    ```
    npm install -g sass
    ```
4. Run the compiler with:
    ```
    sass --watch assets/css/bootstrap_sass:assets/css
    ```
    This will also watch the bootstrap_sass folder for changes and re-compile the CSS when they are made. This way you can make changes quickly and not worry about re-compiling.
6. Switch the user token for EmailJS with your own. It can be found in the head tag:
    ```
    (function () {
        emailjs.init("<your user token>");
    })();
    ```
5. Run the project with your chosen method. You can drop index.html into a web browser and it should run fine, open a local port and access it or, if you have python installed, run it on an HTTP server with python with a command such as:
    ```
    python3 -m http.server
    ```
6. Enjoy the site!

## Github Deployment
### Github Preparation
- It is possible to copy or clone the repository to directly for deployment, but you will have to compile the make sure the SCSS compiles correctly first. Github Pages' Jekyll themes support this but you will have to make some customisations. Details can be found [here](https://jekyllrb.com/docs/assets/).
**Requirements:**
- A free GitHub account.
- A free EmailJS account.

### Github Instructions
1. Log in to your GitHub account.
navigate to [https://github.com/Ri-Dearg/neverlost-thrift](https://github.com/Ri-Dearg/neverlost-thrift).
1. You can set up your own repository and copy or clone it, or you fork the repository.
2. `git add`, `git commit` and `git push` to a GitHub repository, if necessary.
3. GitHub pages will update from the master branch by default.
4. Go to the **Settings** page of the repository.
5. Scroll down to the **Github Pages** section.
7. Select the Master Branch as the source and **Confirm** the selection.
8. Wait a minute or two and it should be live for viewing. See my own [here](https://ri-dearg.github.io/horizon-photo/).

## Credits and Contact
### Content
Nearly all text content was generated by ChatGpt.

Any code utilised from a site is documented and credited within the code.
All photographs were generated in [FREEPIK](https://de.freepik.com/search?icon_color=multicolor&format=search&type=icon&shape=fill)
Logo design is my own.

### Contact
Please feel free to contact me at `c.wnt.nd1053gmail.com`