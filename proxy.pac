function FindProxyForURL(url, host) {
    // Очищаем хост от лишних пробелов и приводим к нижнему регистру
    var lhost = host.toLowerCase();
    
    // Проверка для duo.com
    if (shExpMatch(lhost, "xnxx.com") || shExpMatch(lhost, "*.xnxx.com")) {
        return "PROXY 138.201.245.91:8080; PROXY 159.223.242.164:3000; PROXY 128.140.9.250:3000; DIRECT";
    }

    return "DIRECT";
}

