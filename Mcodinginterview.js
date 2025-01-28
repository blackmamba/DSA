/**
 * @param a a list of non-null integers, in ascending order
 * @param b a list of non-null integers, in ascending order
 * @return the integers that are contained in either a or b, in ascending order
 * 
 * a - [1, 3, 4]
 * b - [2, 6]
 * return - [1, 2, 3, 4, 5, 6]
 */
// List<Integer> union(List<Integer> a, List<Integer> b);
function union(list1, list2) {
  let i = 0; j= 0;
  const result = [];

  while (i < list1.length && j < list2.length) {
    if (list1[i] === list2[j]) {
      if (result.length < 1 || result[result.length-1] !== list1[i]) {    
        result.push(list1[i]);
      }
      i++;
      j++;      

    } else if (result.length < 1 || list1[i] > list2[j]) {
      if (result[result.length-1] !== list2[j]) {    
        result.push(list2[j]);
      }
      j++;
    } else {
      if (result.length < 1 || result[result.length-1] !== list1[i]) {    
        result.push(list1[i]);
      }
      i++;
    }
  }


    //add remaining elements from the longer list
  while (i < list1.length ) {
    if (result.length < 1 || result[result.length-1] !== list1[i]) {
      result.push(list1[i]);
    }  
    i++;
  }

  while (j < list2.length) {
    if ((result.length < 1 || result[result.length-1] !== list2[j])) {
      result.push(list2[j]);
    }  
    j++;
  }
  return result;
}
/*

a - [1]
b - [1, 1, 2]
return [1, 2]

* a - [1, 3, 4], b - [2, 6]
expected return - [1, 2, 3, 4, 5, 6]
i=0, j=0,  a.length = 3 b.length=2 result=[1] 
i=1, j=1, result=[1, 2, 3, 4, 6]
result=[1, 2, 3, 4, 6]
T: O(m+n) = O(n)
S: O(m+n) = O(n)
*/

 /**
  * @param a a list of non-null integers, in ascending order
  * @param b a list of non-null integers, in ascending order
  * @return the integers that are contained in both a and b, in ascending order
  * 
 * a - [1, 2, 3, 4, 5]
 * b - [1, 2, 5, 6]
 * return - [1, 2, 5]
*/
 //List<Integer> intersect(List<Integer> a, List<Integer> b);
function intersect(list1, list2) {
  let i = 0; j= 0;
  const result = [];

  while (i < list1.length && j < list2.length) {
    if (list1[i] === list2[j]) {
      if (result.length < 1 || result[result.length-1] !== list1[i]) {    
        result.push(list1[i]);
      }
      i++;
      j++;
    } else if (list1[i] > list2[j]) {
      j++;
    } else {
      i++;
    }
  }

  return result;
}

/* a - [1, 2, 3, 4, 5]
 * b - [1, 2, 5, 6]
 *expected  return - [1, 2, 5]
 initial state i=0, j=0,  a.length = 5 b.length=4 result=[] 

 i=0, j=0, result=[1] 
 i=1, j=1, result=[1, 2] 
 i=2, j=2, result=[1, 2]
 i=3, j=2, result=[1, 2]
 i=4, j=2, result=[1, 2, 5]
 i=5, j=3, result=[1, 2, 5]

 result=[1, 2, 5]

 T: O(n)
 S: O(n)
 
a - [1, 1, 2, 2, 3, 4, 5]
b - [1, 2, 2, 3, 3, 5, 6]
return = [1, 2, 5]

 */