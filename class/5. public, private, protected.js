class Hunter {
  _level = 1;
  #levelLimit = 10;

  constructor(dex) {
    this._dex = dex;

    console.log(`민첩이 ${dex}인 헌터를 만듭니다.`);
  }

  get dex() {
    return this._dex;
  }
}

const hunter = new Hunter(10);
// hunter.#levelLimit;

class VoidHunter extends Hunter {
  getLevelLimit() {
    console.log(this.#levelLimit);
  }
}

const voidHunter = new VoidHunter(10);
voidHunter.getLevelLimit();
