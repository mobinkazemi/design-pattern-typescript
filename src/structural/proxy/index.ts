interface Store {
  save(data: string): void;
}

class TextStore implements Store {
  save(data: string): void {
    console.log("data:", data, "saved!");
  }
}

class ProxyTextStore implements Store {
  constructor(private textStore?: TextStore) {}

  save(data: string): void {
    if (!this.textStore) {
      console.log("Lazy loading...");

      this.textStore = new TextStore();
    }

    this.textStore.save(data);
  }
}

const proxy = new ProxyTextStore();

proxy.save("Hello World through proxy");
