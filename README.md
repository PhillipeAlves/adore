![Banner](/public/adore-banner.gif)

</br>

> ## About

</br>

This is the implementation of a catalogue page using the **Adore beauty API**, with a list screen and single detail screen. The application was built using Functional React. All the components are plain functions and use **React Hooks** to perform solutions.

</br>

> > ### `Live demo`

</br>

A live demo of this application is available [here](https://lit-basin-18854.herokuapp.com/).

</br>

---

</br>

> ## Implementation

</br>

> > ### `Data fetching and State`

</br>

The application starts with the creation of a **Provider** using the fairly new **React Context API**. It allows the centralized management of state in multiple functional components. The Context API was chosen to handle the data flow over a state management library like **Redux** because of the size of the application.

Inside of the Provider the initial state was stablished using **useState**. Then **useEffect** was used to update the state with data fetched asynchronously from the API. UseEffect was also used to store data in localStorage and update it back to the state to create persistent data when needed.

The state is then available throughout the application in the **Context** created for the Provider. Inside of the components **useContext** was used in combination with the Context to access and update the state dynamically.

</br>

> > ### `Structure`

</br>

```

    src
      |
      Components (logic)
      |
      Context (centralized state)
      |
      Helpers (code abstraction)
      |
      Pages (render)
      |
      Stylesheets (css)


```

</br>

---

</br>

> ## Run locally

</br>

> > ### `1` - Clone the project to your local directory

</br>

```
$ git clone https://github.com/PhillipeAlves/adore.git cd adore
```

</br>

> > ### `2` - Install the dependencies

</br>

```
$ npm install
```

</br>

> > ### `3` - Run

</br>

```
$ npm start
```

</br>

---
