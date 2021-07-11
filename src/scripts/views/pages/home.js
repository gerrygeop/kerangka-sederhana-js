const Home = {
  async render() {
    return `
      <div class="homepage">
        <div class="homepage__image">
          <img src="images/ghost.svg" alt="Ghost">
        </div>
        <h1>Homepage</h1>
      </div>
    `;
  },

  async afterRender() {
    // what next?
  },
};

export default Home;