import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Navbar from "./navbar.component";
import { BrowserRouter } from "react-router-dom";

describe("Navbar", () => {
  test("Vérifie la présente du texte Visualiser portefeuille", async () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    // screen.debug();
    const label = screen.getByText("Accueil");
    // expect(true).toBe(true);
    expect(label).toBeInTheDocument();
  });
});
