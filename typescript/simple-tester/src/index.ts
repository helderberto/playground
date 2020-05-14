interface SectionFunc {
  (description: string, callback: () => void),
}

let describe: SectionFunc;

describe = (desc, cb) => {
  console.log(`🏁 ${desc}`);
  cb();
}

let it: SectionFunc;

it = (desc, cb) => {
  console.log(`   ${desc}`);
  cb();
}

function expect(left: any): object {
  return {
    toBe(right: any): void {
      if (left !== right) {
        console.log(`     expected "${left}" to be "${right}"`);
      }
    }
  }
}

export {
  describe,
  it,
  expect,
}
