
    function solution(absolutes,signs) {
        let a = absolutes
        let b = signs
        var c = 0;
      for(let i = 0; i < a.length; i++)
        b[i] == true ? c+= a[i] : c-=a[i]
        return c; 
      }