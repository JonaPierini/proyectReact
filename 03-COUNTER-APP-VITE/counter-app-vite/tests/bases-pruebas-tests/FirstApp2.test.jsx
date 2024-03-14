import { render, screen } from "@testing-library/react";
import FirsApp from "../../src/FirstApp";
describe("Prubas en FirsApp", () => {
  const titulo = "El tituuuuuulo";
  const subtitulo = "Subtiulo";
  test("debe de hacer match con el snapshot", () => {
    const { container } = render(<FirsApp titulo={titulo}></FirsApp>);
    //genera el snapshot
    expect(container).toMatchSnapshot();
  });
  test('debe de mostrar el mensaje "El tituuuuuulo"', () => {
    render(<FirsApp titulo={titulo}></FirsApp>);
    expect(screen.getByText(titulo)).toBeTruthy();
  });
  test("debe de mostrar el titulo en un h1", () => {
    render(<FirsApp titulo={titulo}></FirsApp>);
    //headin level 1 refiere a h1
    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(
      titulo
    );
  });
  test("debe de mostrar el subtitulo enviado por props", () => {
    render(<FirsApp titulo={titulo} subtitulo={subtitulo}></FirsApp>);
    //evalua la cantidad de subtitulos que tengos. getAllbyText es un arreglo
    expect(screen.getAllByText(subtitulo).length).toBe(1);
  });
});
