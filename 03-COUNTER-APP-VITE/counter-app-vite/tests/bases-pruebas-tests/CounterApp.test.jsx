import { render, screen, fireEvent } from "@testing-library/react";
import { CounterApp } from "../../src/CounterApp";
describe("Pruebas en el CounterApp", () => {
  test("debe de hacer match con el snapshot", () => {
    const { container } = render(<CounterApp></CounterApp>);
    expect(container).toMatchSnapshot();
  });
  test("debe de mostrar el valor inicial de 10", () => {
    const value = 10;
    render(<CounterApp value={value}></CounterApp>);
    expect(Number(screen.getByText(value).innerHTML)).toBe(10);
    expect(screen.getByText(value)).toBeTruthy();
  });
  test('debe de incrementar con el boton +1', () => {
    render(<CounterApp value={10}/>)
    fireEvent.click(screen.getByText('+1'))
    expect(screen.getByText('11')).toBeTruthy();
   
  })
});
