export default {
    template: `

    <body>
      
    <header>
    <nav>
      <ul>
        <li><a href="#home">Register</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
    </header>

  <section id="home">
    <div>
      <h1>Oh hi there!</h1>
      <h2>Excited for chating?</h2>
    </div>        
    
    <form id="my-form">
    <h1> LogIn </h1>
            <label for="username">Enter Username:</label>
            <input v-model="uname" type="text" name="username" required placeholder="username">
            <label for="password">Enter Password:</label>
            <input v-model="pword" type="password" name="password" required placeholder="password">
            <input @click="submitData" type="submit" value="Valid Your Information" >
            <a href="index.html">Let's chat</a>


            
        </form>
  </section>


  </body>
    `,

    data: function() {
        return {
            uname: "",
            pword: ""
        }
    },

    methods: {
        submitData() {
            // hit an api with a Fetch call
            // refer to the mailForm example from last semester -> the node mailer setup

           // debugger;
        }
    }
}