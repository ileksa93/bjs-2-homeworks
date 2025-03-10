//Задача № 1
function cachingDecoratorNew(func) {
    function cachingDecoratorNew(func) {
        let cache = [];
      
        function wrapper(...args) {
          const hash = md5(JSON.stringify(args));
          let objectInCache = cache.find((item) => item.hash === hash);
          if (objectInCache) {
            console.log("Из кеша: " + objectInCache.value);
            return "Из кеша: " + objectInCache.value;
          }
      
          let result = func(...args);
          cache.push({ hash, value: result });
          if (cache.length > 5) {
            cache.shift();
          }
          console.log("Вычисляем: " + result);
          return "Вычисляем: " + result;
        }
      
        return wrapper;
      }
      
}

//Задача № 2
ffunction debounceDecoratorNew(fn, debounceTime) {
    let timeoutId;
    let count = 0;
    let allCount = 0;
    
    function wrapper(...args) {
      const context = this;
      
      clearTimeout(timeoutId);
      
      timeoutId = setTimeout(() => {
        fn.apply(context, args);
        count++;
      }, debounceTime);
      
      allCount++;
    }
    
    wrapper.count = () => count;
    wrapper.allCount = () => allCount;
    
    return wrapper;
  }
  