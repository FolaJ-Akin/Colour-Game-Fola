// int solution()
// {
// int A[4][4] = {{2, 2, 4, 2},
// {0, 3, 0, 1},
// {1, 2, 2, 1},
// {4, 1, 2, 2}};
// int n = 4;
// for(int i = 0; i col)
// {
// pawnLoc[1] = pawnLoc[1] + 1;
// }
// else
// {
// pawnLoc[0] = pawnLoc[0] + 1;
// }
// }

// return totalGrains;
// }

// int main()
// {

// int sol = solution();
// cout<<"Solution = "<

// class Solution:
//     def twoSum(self, nums: List[int], target: int) -> List[int]:
//         hashmap = {}
//         for i in range(len(nums)):
//             hashmap[nums[i]] = i
//         for i in range(len(nums)):
//             complement = target - nums[i]
//             if complement in hashmap and hashmap[complement] != i:
//                 return [i, hashmap[complement]]

// function twoSum(nums, target) {
//   const hashmap = {};
//   for (let i = 0; i < nums.length; i++) {
//     hashmap[nums[i]] = i;
//   }
//   for (let i = 0; i < nums.length; i++) {
//     const complement = target - nums[i];
//     if (complement in hashmap && hashmap[complement] !== i) {
//       return [i, hashmap[complement]];
//     }
//   }
// }

// function searchDepth() {
//   var maxDepth = 0,
//       d,
//       parents,
//       myselector = 'ul, ol';

//   $(myselector).each( function(i) {
//     parents = $(this).parents(myselector);
//     d = parents ? parents.length + 1 : 1;
//     maxDepth = d > maxDepth ? d : maxDepth;
//   });
//   return maxDepth;
// }

// const regex = "^(?=.*[a-z])(?=.*[A-Z])$";

function solution(S) {
  // write your code in JavaScript (Node.js 14)
  let stringarr = S.split("");
  let target = "BANANA".split("");
  let collection = {};

  for (let i = 0; i < S.length; i++) {
    // console.log(S[i])
    if (!collection[S[i]] && target.includes(S[i])) {
      collection[S[i]] = 1;
    } else if (collection[S[i]]) {
      collection[S[i]]++;
    }
  }
  // console.log("collection",collection)
  let multi = collection["B"];
  let no_N = multi * 2;
  let no_A = multi * 3;
  let amountN = Math.floor(collection["N"] / 2);
  let amountA = Math.floor(collection["A"] / 3);
  if (collection["B"] > 0) {
    // console.log("amountA<amountN",amountA,amountN)
    let check = amountA < amountN ? amountA : amountN;
    let checkNo = amountA < amountN ? 3 : 2;
    let checkLetter = amountA < amountN ? "A" : "N";
    // console.log(check,checkNo,checkLetter)
    if (check * checkNo <= collection[checkLetter]) {
      return check;
    } else {
      return 0;
    }
  } else {
    return 0;
  }
}

function solution(A) {
  // write your code in JavaScript (Node.js 14)
  let hashmap = {};
  // let arr = A.toString()
  for (let num of A) {
    let numArr = num.toString().split("");
    let sumOfDigits = parseInt(numArr[0]) + parseInt(numArr[1]);
    // console.log(sumOfDigits)
    hashmap[num] = sumOfDigits;
  }
  // console.log("hashmap",hashmap)
  let collection = [];
  let count = 0;
  for (let i = 0; i < A.length; i++) {
    let target = hashmap[A[i]];
    // console.log(target)
    for (let j = i + 1; j < A.length; j++) {
      if (target === hashmap[A[j]]) {
        collection.push([A[i], A[j]]);
        count++;
      }
    }
  }
  // console.log(count,"count")
  if (count > 0) {
    let highest = 0;
    for (let item of collection) {
      let sum = item[0] + item[1];
      if (sum > highest) {
        highest = sum;
      }
    }
    return highest;
  } else {
    return -1;
  }
}

// p{
//   color:red;
//   background:yellow;
//   font-size: clamp(5px,20px,50px);
// }
