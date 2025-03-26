import { AndroidButton, iOSButton } from "./components/button";
import { AndroidTextBox, iOSTextBox } from "./components/textbox";

class Application {
  private button: any;
  private textBox: any;

  constructor(os: string) {
    if (os === "Android") {
      this.button = new AndroidButton();
      this.textBox = new AndroidTextBox();
    } else if (os === "iOS") {
      this.button = new iOSButton();
      this.textBox = new iOSTextBox();
    } else {
      throw new Error("Sistema operacional não suportado!");
    }
  }

  renderUI(): void {
    this.button.render();
    this.textBox.render();
  }
}

const userOS = "iOS";
const app = new Application(userOS);

app.renderUI();
