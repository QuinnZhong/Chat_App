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
            <label for="bio">Bio:</label>
            <textarea id="bio" name="userbio"></textarea>
            <label for="age">Age:</label>
          <select id="age" name="userage">
              <option value="0to10yearsold">0 to 10 years old</option>
              <option value="11to18yearsold">11 to 18 years old</option>
              <option value="19to25yearsold">19 to 25 years old</option>
              <option value="26to40yearsold">26 to 40 years old</option>
              <option value="40to60yearsold">41 to 60 years old</option>
              <option value="over60yearsold">Over 60 years old</option>
          </select>

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