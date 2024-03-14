 
import { render } from '@testing-library/react';
import FirsApp from '../../src/FirstApp';
describe("Prubas en FirsApp", () => {
  // test("debe de hacer match con el snapshot", () => {
  //   const title = 'El tituuuuuuulo'
  //   const {container} = render(<FirsApp titulo={title}/>)
  //   // esto me genera una carpeta => _snapshots_ que contine una primer impresion del componente. Si cambio los valores salta error. Si toco u ya estaria
  //   expect (container).toMatchSnapshot();
  // });
  test("debe de mostrar el titulo en un h1", ()=> {
    const title = 'El tituuuuuulo'
    const {container, getByText, getByTestId} = render(<FirsApp titulo={title}/>)

    expect(getByText(title)).toBeTruthy()
    const h1 = container.querySelector('h1')
    //toContain que contenga
    expect(h1.innerHTML.trim()).toContain(title)

    expect(getByTestId('test-title').innerHTML).toBe(title)

  });
  test("debe de mostrar el subtitulo", ()=> {
    const subtitle = 'El subtitulo'
    const { getByText} = render(<FirsApp subtitulo={subtitle}/>)

    expect(getByText(subtitle)).toBeTruthy()
    

  })
  
});
