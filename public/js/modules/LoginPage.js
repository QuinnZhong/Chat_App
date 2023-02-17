export default {
    template: `
    <body> 
    <header>
    <nav>
      <ul>
        <li><a href="#home">home</a></li>
        <li><a href="#about">about</a></li>
        <li><a href="#contact">contact</a></li>
      </ul>
    </nav>
    </header>

  <section id="home">
    <div>
      <h1>Oh hi there!</h1>
      <h2>Excited for meeting?</h2>
      <a href="#home">New user? Click Here!</a>
    </div>        
    
    
    <form id="my-form">
            <label for="username">Enter Username:</label>
            <input v-model="uname" type="text" name="username" required placeholder="username">

            <label for="password">Enter Password:</label>
            <input v-model="pword" type="password" name="password" required placeholder="password">

            <input @click="submitData" type="submit" value="Submit">
            
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

            debugger;
        }
    }
}