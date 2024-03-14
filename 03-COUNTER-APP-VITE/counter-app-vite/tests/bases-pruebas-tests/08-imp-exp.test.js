import {
  getHeroeById,
  getHeroesByOwner,
} from "../../src/base-pruebas/08-imp-exp";

describe("Pruebas en 08-imp-exo", () => {
  test("getHeroesById debe de retorn un hero por ID", () => {
    const id = 1;
    const hero = getHeroeById(id);
    console.log(hero);

    expect(hero).toEqual({
      id: 1,
      name: "Batman",
      owner: "DC",
    });
  });
  test("getHeroesById debe de retorn undefinid si no existe", () => {
    const id = 10;
    const hero = getHeroeById(id);
    console.log(hero);

    expect(hero).toBeFalsy();
  });
});
test("Debbe de retornar un arreglo con los heroes de DC", () => {
  const owner = "DC";
  const dc = getHeroesByOwner(owner);
  expect(dc.length).toEqual(3);
});
