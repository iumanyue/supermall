// 防抖封装一个函数
export  function  debounce(func,delay){
      let timer = null
      return function(...args){
        // 如果timer有值 把之前的timer清除掉
        if(timer) clearTimeout(timer)
        timer =setTimeout(() => {
          func.apply(this,args)
        }, delay);
      }
    } 