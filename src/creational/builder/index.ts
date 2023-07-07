class Website {
  constructor(
    public name?: string,
    public host?: string,
    public port?: number,
    public isPremium?: boolean
  ) {}
}

interface WebsiteBuilder {
  setName(name: string): WebsiteBuilder;
  setHost(host: string): WebsiteBuilder;
  setPort(port: number): WebsiteBuilder;
  setIsPremium(isPremium: boolean): WebsiteBuilder;
  build(): Website;
}

class PremiumWebsiteBuilder implements WebsiteBuilder {
  constructor(private website: Website) {    
    this.clear();    
  }
  setName(name: string): WebsiteBuilder {
    this.website.name = name;
    return this;
  }
  setHost(host: string): WebsiteBuilder {
    this.website.host = host;
    return this;
  }
  setPort(port: number): WebsiteBuilder {
    this.website.port = port;
    return this;
  }
  setIsPremium(): WebsiteBuilder {
    this.website.isPremium = true;
    return this;
  }
  build(): Website {
    const website = this.website;
    
    this.clear();
    
    return website;
  }

  clear(): void {
    this.website = new Website();
    this.website.isPremium = true;
  }
}

const premiumBuilder = new PremiumWebsiteBuilder(new Website());

premiumBuilder.setName('Test Website').setPort(3000).setHost('localhost')

const website = premiumBuilder.build()
