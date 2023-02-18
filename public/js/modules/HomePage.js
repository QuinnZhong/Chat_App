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
         <h1>Register</h1>
         <h2>Now</h2>
       </div> 
    <form id="my-form">
            <label for="username">Enter Your Name:</label>
            <input v-model="uname" type="text" name="yourname" required placeholder="yourname">

            <label for="username">Enter Your Email:</label>
            <input v-model="uname" type="text" name="email" required placeholder="email">

            <label for="username">Enter Username:</label>
            <input v-model="uname" type="text" name="username" required placeholder="username">

            <label for="password">Enter Password:</label>
            <input v-model="pword" type="password" name="password" required placeholder="password">

            <input @click="submitData" type="submit" value="Valid Your Information">
            
        </form>
  </section>


  </body>
    `,

    data: function() {
        return {
            message: "Welcome to my Super Awesome App!"
        }
    },

    methods: {
        registerUser() {
            console.log('clicked register button');
        }
    }
}