interface IHeader {
  content: string;
}
interface IBody {
  content: string;
}
interface IFooter {
  content: string;
}

class Header implements IHeader {
  content: string;
  constructor(content: string) {
    this.content = `<head>${content}</head>`;
  }
}
class Body implements IBody {
  content: string;
  constructor(content: string) {
    this.content = `<main>${content}</main>`;
  }
}
class Footer implements IFooter {
  content: string;
  constructor(content: string) {
    this.content = `<footer>${content}</footer>`;
  }
}

interface IWebpageFactory {
  createHeader(text: string): IHeader;
  createBody(text: string): IBody;
  createFooter(text: string): IFooter;
}

class Webpage implements IWebpageFactory {
  createHeader(text: string): Header {
    return new Header(text);
  }
  createBody(text: string): Body {
    return new Body(text);
  }
  createFooter(text: string): Footer {
    return new Footer(text);
  }
}

const webFactory = new Webpage();

const head = webFactory.createHeader("This is header");
const body = webFactory.createBody("This is body");
const footer = webFactory.createFooter("This is footer");

console.log({
  head: head.content,
  body: body.content,
  footer: footer.content,
});
