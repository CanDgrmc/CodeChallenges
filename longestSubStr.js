function lengthOfLongestSubstring(str) {
    let longest = 0;
    let longestStr = "";
    let seen = {};
    let start = 0;
    let next = 0;
  
    while (next < str.length) {
      let char = str[next];
  
      if (seen[char]) {
        start = Math.max(start, seen[char]);
      }
  
      if (longest < next - start + 1) {
        longest = next - start + 1;
        longestStr = str.slice(start, next + 1);
      }
      seen[char] = next + 1;
      next++;
    }
  
    return longest;
  }

console.log(lengthOfLongestSubstring("pwwkew"))