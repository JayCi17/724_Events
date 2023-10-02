import { fireEvent, render, screen } from "@testing-library/react";
import Home from "./index";

describe("When Form is created", () => {
  it("a list of fields card is displayed", async () => {
    render(<Home />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success message is displayed", async () => {
      render(<Home />);
      fireEvent(
        await screen.findByText("Envoyer"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      await screen.findByText("En cours");
      await screen.findByText("Message envoyé !");
    });
  });

});


describe("When a page is created", () => {
  it("a list of events is displayed", () => {
    render(<Home/>);
    const divElement = screen.getAllByTestId("eventList");
    expect(divElement).toBeInTheDocument();
    // to implement
  })
  it("a list a people is displayed", () => {
    render(<Home/>);
    const peopleId = screen.getAllByTestId("peopleId");
    expect(peopleId).toHaveLength(6);
    // to implement
  })
  it("a footer is displayed", () => {
    render(<Home/>);
    const footerTitle = screen.getByText("Contactez-nous");
    expect(footerTitle).toBeDefined();
    // to implement
  })
  it("an event card, with the last event, is displayed", () => {
    render(<Home/>);
    const lastHeavenHeading = screen.getByRole("heading",{
      name : "Notre dernière prestation",
    });
    expect(lastHeavenHeading).toBeInTheDocument();
    // to implement
  })
});
