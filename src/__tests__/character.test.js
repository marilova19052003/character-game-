import Character from "../character";
import {
  Bowman,
  Swordsman,
  Magician,
  Daemon,
  Undead,
  Zombie,
} from "../characters";

describe("Character class", () => {
  test("should create a character with valid properties", () => {
    const character = new Character("Hero", "Bowman");
    expect(character.name).toBe("Hero");
    expect(character.type).toBe("Bowman");
    expect(character.health).toBe(100);
    expect(character.level).toBe(1);
    expect(character.attack).toBe(25);
    expect(character.defence).toBe(25);
  });

  test("should throw error for invalid name", () => {
    expect(() => new Character("H", "Bowman")).toThrow(
      "Имя должно содержать от 2 до 10 символов"
    );
  });

  test("should throw error for invalid type", () => {
    expect(() => new Character("Hero", "InvalidType")).toThrow(
      "Некорректный тип персонажа"
    );
  });

  test("should level up character", () => {
    const character = new Character("Hero", "Bowman");
    character.levelUp();
    expect(character.level).toBe(2);
    expect(character.attack).toBe(30); // 25 * 1.2
    expect(character.defence).toBe(30); // 25 * 1.2
    expect(character.health).toBe(100);
  });

  test("should throw error when leveling up dead character", () => {
    const character = new Character("Hero", "Bowman");
    character.health = 0;
    expect(() => character.levelUp()).toThrow("Нельзя повысить левел умершего");
  });

  test("should take damage", () => {
    const character = new Character("Hero", "Bowman");
    character.damage(20);
    expect(character.health).toBe(85); // 100 - 20 * (1 - 25 / 100)
  });

  test("should not allow health to go below 0", () => {
    const character = new Character("Hero", "Bowman");
    character.damage(200);
    expect(character.health).toBe(0);
  });
});
