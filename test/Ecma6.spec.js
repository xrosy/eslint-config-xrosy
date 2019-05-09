import moment from 'moment';

const cString = 'CONST_STRING';
console.log(cString);

let vString;

vString = 123;
console.log(vString);

const arr1 = [ 'a', 2, {}, () => {}, 222 ];

const arrowFunctionBody = () => {
  for (var i = 0; i < 1; i++) {
    'pass';
    console.log('i', i);
  }

  return { a: 1 };
};


/* 获取当前的时间 */
export function getCurrentDate(arg1, arg2, arg3) {
  arrowFunctionBody(arg3);

  return moment();
}

export function getCurrentTime() {
  return moment.isDate();
}

export const ArrowFunction = ({ argv1, argv2, ...argvs }) => {
  if (argv2 instanceof Object) {
    const result = Object.keys(argv2).map((keyName, keyIndex) => {
      const prefix = 'map';

      return `${prefix}_keyIndex_${keyIndex}`;
    });

    return result;
  }

  if (argvs[0] === 1) {
    return 1;
  }
  else if (moment.isMoment(argv1) === true) {
    const aargv1 = argv2 + 1;

    return aargv1;
  }

  if (argv1 === []) return 'empty';

  switch (argv1) {
    case '22':
      break;

    case '1':
      break;

    default:
      console.log('aaa');
  }

  return 0;
};
