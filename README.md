![Banner](/public/adore-banner.gif)

</br>

> ## About

</br>

This is the implementation of a catalogue page using the **Adore beauty API**, with a list screen and single detail screen. The application was built using Functional React. All the components are plain functions and use **React Hooks** to perform solutions.

---

</br>

> ## Implementation

</br>

> > ### `Data fetching and State`

</br>

The application starts with the creation of a **Provider** using the fairly new **React Context API**. It allows the centralized management of state in multiple functional components. It was chosen to handle the application data flow over a state management library like **Redux** because of the size of the app.

Inside of the Provider the initial state was stablished using **useState**. Then **useEffect** was used to update the state with data fetched asynchronously from the API. UseEffect was also used to store data in localStorage and update it back to the state to create persistent data when needed.

The state is then available in the **Context** created for the Provider. To access it in the components **useContext** was used in combination with the Context.

</br>
</br>

> > ### `Structure`

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
