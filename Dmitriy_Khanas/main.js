var email = prompt("Please enter your email", "Harry@mail.ru");
var email_pat = /[0-9a-z_]+@[0-9a-z_]+\.[a-z]{2,5}/i;
var email_dom = /[0-9a-z_]+\.[a-z]{2,5}/i;
if ( email_pat.test(email) ) {
    alert('Email is correct, domain mailbox user - ' + email.match(email_dom))
    } else { alert('Email incorrect') }


var pass = prompt("Please enter your pass", "pass");
var pass_l = /^[0-9]|[a-z]{1,6}$/i;
var pass_m = /^[a-z0-9]{1,8}$/i;
var pass_c = /^[a-z0-9]{8,}$/i;
if (pass_l.test(pass)) { alert('l') } 
else if (pass_m.test(pass)) { alert('m') }
else if (pass_c.test(pass)) { alert('c') }
else { alert('pass incorrect') }

//1) Написать регулярное выражение для валидации e-mail. Пользователь вводит через модальное окно prompt() и обрабатывает эго с выводом в консоль:
//    - true или false (правильно введен e-mail или нет)
//- в сети много решений, но советую попытаться написать самостоятельно, чтобы вы разобрались с регулярными выражениями — если верно, то в консоли появляется сообщение
//«Email введен верно, домен почтового ящика пользователя — mail.ru»
//не весь адрес, а только домен, после @
//- если не верно то выводится alert с сообщением об ошибке
//


//2) Написать скрипт проверки на сложность пароля. Пользователь вводит через модальное окно prompt() пароль и получает сообщение о сложности своего пароля. Установим три типа сложности — легкий, средний, сложный. Параметры сложности выберете для себя сами, но обязательно опишите в комментариях.
//    Например:
//- легкий — просто цифры до 6 символов
//- средний — цифры и буквы до 8 символов
//-сложный — цифры и буквы в верхнем и нижнем регистре более 8 символов

