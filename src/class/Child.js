class Child {
  constructor(id, name, language, html_url, stargazers_count, forks) {
    this.id = id;
    this.name = name;
    this.language = language;
    this.html_url = html_url;
    this.stargazers_count = stargazers_count;
    this.forks = forks;
  }
  get getValue() {
    return {
      id: this.id,
      name: this.name,
      language: this.language,
      html_url: this.html_url,
      stargazers_count: this.stargazers_count,
      forks: this.forks,
    };
  }
}

export default Child;
