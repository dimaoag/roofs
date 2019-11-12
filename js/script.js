new WOW().init();

$(document).ready(function () {
    var swiper_sec3 = new Swiper($('.swiper-sec3'), {
        pagination: {
            el: $('.swiper-pagination-sec3'),
            type: 'fraction',
        },
        navigation: {
            nextEl: $('.swiper-next-sec3'),
            prevEl: $('.swiper-prev-sec3'),
        },
    });

});

$(".youtube-link").grtyoutube();


//mask
! function (a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : jQuery)
}(function (a) {
    var b, c = navigator.userAgent,
        d = /iphone/i.test(c),
        e = /chrome/i.test(c),
        f = /android/i.test(c);
    a.mask = {
        definitions: {
            9: "[0-9]",
            a: "[A-Za-z]",
            "*": "[A-Za-z0-9]"
        },
        autoclear: !0,
        dataName: "rawMaskFn",
        placeholder: "_"
    }, a.fn.extend({
        caret: function (a, b) {
            var c;
            if (0 !== this.length && !this.is(":hidden")) return "number" == typeof a ? (b = "number" == typeof b ? b : a, this.each(function () {
                this.setSelectionRange ? this.setSelectionRange(a, b) : this.createTextRange && (c = this.createTextRange(), c.collapse(!0), c.moveEnd("character", b), c.moveStart("character", a), c.select())
            })) : (this[0].setSelectionRange ? (a = this[0].selectionStart, b = this[0].selectionEnd) : document.selection && document.selection.createRange && (c = document.selection.createRange(), a = 0 - c.duplicate().moveStart("character", -1e5), b = a + c.text.length), {
                begin: a,
                end: b
            })
        },
        unmask: function () {
            return this.trigger("unmask")
        },
        mask: function (c, g) {
            var h, i, j, k, l, m, n, o;
            if (!c && this.length > 0) {
                h = a(this[0]);
                var p = h.data(a.mask.dataName);
                return p ? p() : void 0
            }
            return g = a.extend({
                autoclear: a.mask.autoclear,
                placeholder: a.mask.placeholder,
                completed: null
            }, g), i = a.mask.definitions, j = [], k = n = c.length, l = null, a.each(c.split(""), function (a, b) {
                "?" == b ? (n--, k = a) : i[b] ? (j.push(new RegExp(i[b])), null === l && (l = j.length - 1), k > a && (m = j.length - 1)) : j.push(null)
            }), this.trigger("unmask").each(function () {
                function h() {
                    if (g.completed) {
                        for (var a = l; m >= a; a++)
                            if (j[a] && C[a] === p(a)) return;
                        g.completed.call(B)
                    }
                }

                function p(a) {
                    return g.placeholder.charAt(a < g.placeholder.length ? a : 0)
                }

                function q(a) {
                    for (; ++a < n && !j[a];);
                    return a
                }

                function r(a) {
                    for (; --a >= 0 && !j[a];);
                    return a
                }

                function s(a, b) {
                    var c, d;
                    if (!(0 > a)) {
                        for (c = a, d = q(b); n > c; c++)
                            if (j[c]) {
                                if (!(n > d && j[c].test(C[d]))) break;
                                C[c] = C[d], C[d] = p(d), d = q(d)
                            } z(), B.caret(Math.max(l, a))
                    }
                }

                function t(a) {
                    var b, c, d, e;
                    for (b = a, c = p(a); n > b; b++)
                        if (j[b]) {
                            if (d = q(b), e = C[b], C[b] = c, !(n > d && j[d].test(e))) break;
                            c = e
                        }
                }

                function u() {
                    var a = B.val(),
                        b = B.caret();
                    if (o && o.length && o.length > a.length) {
                        for (A(!0); b.begin > 0 && !j[b.begin - 1];) b.begin--;
                        if (0 === b.begin)
                            for (; b.begin < l && !j[b.begin];) b.begin++;
                        B.caret(b.begin, b.begin)
                    } else {
                        for (A(!0); b.begin < n && !j[b.begin];) b.begin++;
                        B.caret(b.begin, b.begin)
                    }
                    h()
                }

                function v() {
                    A(), B.val() != E && B.change()
                }

                function w(a) {
                    if (!B.prop("readonly")) {
                        var b, c, e, f = a.which || a.keyCode;
                        o = B.val(), 8 === f || 46 === f || d && 127 === f ? (b = B.caret(), c = b.begin, e = b.end, e - c === 0 && (c = 46 !== f ? r(c) : e = q(c - 1), e = 46 === f ? q(e) : e), y(c, e), s(c, e - 1), a.preventDefault()) : 13 === f ? v.call(this, a) : 27 === f && (B.val(E), B.caret(0, A()), a.preventDefault())
                    }
                }

                function x(b) {
                    if (!B.prop("readonly")) {
                        var c, d, e, g = b.which || b.keyCode,
                            i = B.caret();
                        if (!(b.ctrlKey || b.altKey || b.metaKey || 32 > g) && g && 13 !== g) {
                            if (i.end - i.begin !== 0 && (y(i.begin, i.end), s(i.begin, i.end - 1)), c = q(i.begin - 1), n > c && (d = String.fromCharCode(g), j[c].test(d))) {
                                if (t(c), C[c] = d, z(), e = q(c), f) {
                                    var k = function () {
                                        a.proxy(a.fn.caret, B, e)()
                                    };
                                    setTimeout(k, 0)
                                } else B.caret(e);
                                i.begin <= m && h()
                            }
                            b.preventDefault()
                        }
                    }
                }

                function y(a, b) {
                    var c;
                    for (c = a; b > c && n > c; c++) j[c] && (C[c] = p(c))
                }

                function z() {
                    B.val(C.join(""))
                }

                function A(a) {
                    var b, c, d, e = B.val(),
                        f = -1;
                    for (b = 0, d = 0; n > b; b++)
                        if (j[b]) {
                            for (C[b] = p(b); d++ < e.length;)
                                if (c = e.charAt(d - 1), j[b].test(c)) {
                                    C[b] = c, f = b;
                                    break
                                } if (d > e.length) {
                                y(b + 1, n);
                                break
                            }
                        } else C[b] === e.charAt(d) && d++, k > b && (f = b);
                    return a ? z() : k > f + 1 ? g.autoclear || C.join("") === D ? (B.val() && B.val(""), y(0, n)) : z() : (z(), B.val(B.val().substring(0, f + 1))), k ? b : l
                }
                var B = a(this),
                    C = a.map(c.split(""), function (a, b) {
                        return "?" != a ? i[a] ? p(b) : a : void 0
                    }),
                    D = C.join(""),
                    E = B.val();
                B.data(a.mask.dataName, function () {
                    return a.map(C, function (a, b) {
                        return j[b] && a != p(b) ? a : null
                    }).join("")
                }), B.one("unmask", function () {
                    B.off(".mask").removeData(a.mask.dataName)
                }).on("focus.mask", function () {
                    if (!B.prop("readonly")) {
                        clearTimeout(b);
                        var a;
                        E = B.val(), a = A(), b = setTimeout(function () {
                            B.get(0) === document.activeElement && (z(), a == c.replace("?", "").length ? B.caret(0, a) : B.caret(a))
                        }, 10)
                    }
                }).on("blur.mask", v).on("keydown.mask", w).on("keypress.mask", x).on("input.mask paste.mask", function () {
                    B.prop("readonly") || setTimeout(function () {
                        var a = A(!0);
                        B.caret(a), h()
                    }, 0)
                }), e && f && B.off("input.mask").on("input.mask", u), A()
            })
        }
    })
});


((function ($) {
    $(function () {

        $(document).ready(function () {
            $("[data-mask='callback-catalog-phone']").mask("+3 80 9 9 - 9 9 9 - 9 9 - 9 9");
        });
    })
})(jQuery));


$(document).ready(function () {
    var swiper_sec5 = new Swiper($('.swiper-sec5'), {
        pagination: {
            el: $('.swiper-pagination-sec5'),
            type: 'fraction',
        },
        navigation: {
            nextEl: $('.swiper-next-sec5'),
            prevEl: $('.swiper-prev-sec5'),
        },
    });

});


$('.modal-submit-btn-success').click(function () {
    $('.modal-form button.close').trigger('click');
});

$('.js-form').each(function () {
    var $this = $(this);
    $this.validate({
        highlight: function (element) {
            setTimeout(function () {
                $(element).closest('.b-field').addClass('has-error');
            }, 100)
        },
        unhighlight: function (element) {
            $(element).closest('.b-field').removeClass('has-error');
        },
        onkeyup: false,
        onclick: false,
        rules: {
            Имя: {
                required: true,
            },
            Телефон: {
                required: true,
                myphone: true
            },
        },
        messages: {
            Имя: {
                required: "Введите имя",
            },
            Телефон: {
                required: "Введите номер телефона"
            }
        },
        submitHandler: function (form) {
            var phone = $this.find('input').val();
            $.ajax({
                url: 'mail_2.php',
                data: {
                    phone: phone
                },
                type: 'post',
                success: function (res) {
                    $('.button-modal').trigger('click');
                    $('.js-form input').val('');
                },
                error: function () {
                    alert('Error!')
                },
            });
            return false;
        },
    });
});

$('.parallax-window--index').parallax({
    imageSrc: 'images/3-min.png'
});
$('.parallax-window--catalog').parallax({
    imageSrc: 'images/4-min.jpg'
});



/* -------------------
    Page Hero Parallax
    ---------------------*/
$(window).scroll(function () {
    parallax();
});

function parallax() {
    var scrolled = $(window).scrollTop();
    var w = $(window).width();

    $('.hero').css('top', -(scrolled * 0.0515) + 'rem');
    if (w < 992) {
        // $('.op-2').css('margin-top',scrolled*0.2);
    } else {
        $('.op-1,.op-2,.op-3').css('opacity', 1 - (scrolled * .00170));
        $('.op-2').css('margin-top', scrolled * 0.2);
    }

};

if ($('.wrapper').hasClass('wrapper--catalog')) {
    var BUTTON_FIXED_HEIGHT = 44;
    var HEADER_HEIGHT = 600;
    var URL = 'mail_2.php';
    var orderForm = $('#order_form');
    var modalThankYou = $('#thankModal');
    var fixedWrapper = $('.call-modal-thank-wrapper');
    var callOrderModalButton = $('.call-modal-thank-wrapper .button');
    var modalOrder = $('.order-thank');
    var closeModalOrderButton = $('.order-thank__close');

    orderForm.on('submit', function (evt) {
        var  username = $('#order-thank_name').val();
        var  phone = $('#order-thank_phone').val();

        evt.preventDefault();
        $.ajax({
            url: URL,
            type: 'POST',
            data: {
                username: username,
                phone: phone
            },
            success: function (result) {
                if (modalOrder.hasClass('order-thank--show')) {
                    modalOrder.removeClass('order-thank--show');
                }
                modalThankYou.modal('show');
                orderForm.trigger("reset");
                
            },
            error: function (xhr) {
                console.log(xhr.status);
            }
        });
    });

    var getOffsetOrderForm = function () {
        if (orderForm) {
            var position = orderForm.offset();
            return position.top;
        }
    };

    var formOffsetTop = getOffsetOrderForm();

    var offStickyOrderForm = function () {
        if ($(window).width() < 991) {
            $(window).off('scroll', stickyOrderForm);
            orderForm.closest('.order-thank').removeClass('order_form--stiky');
        }
    };

    $(document).ready(function () {
        offStickyOrderForm();
    });

    $(window).on('resize', function () {
        offStickyOrderForm();
        offFixedButton();
    });

    var stickyOrderForm = function () {
        if ($(window).scrollTop() >= formOffsetTop) {
            orderForm.closest('.order-thank').addClass('order_form--stiky');
        } else {
            orderForm.closest('.order-thank').removeClass('order_form--stiky');
        }
    };

    var offFixedButton = function () {
        if ($(window).width() > 575) {
            $(window).off('scroll', showFixedButton);
            fixedWrapper.removeClass('call-modal-thank-wrapper--show');
        }
    };

    var showFixedButton = function () {
        if ($(window).scrollTop() > HEADER_HEIGHT + BUTTON_FIXED_HEIGHT) {
            fixedWrapper.addClass('call-modal-thank-wrapper--show');
        } else {
            fixedWrapper.removeClass('call-modal-thank-wrapper--show');
        }
    };

    stickyOrderForm();

    var closeFixedOrder = function () {
        modalOrder.removeClass('order-thank--show');
        $(document).off('click', closeFixedBackgroundClick);
    };

    var closeFixedBackgroundClick = function (evt) {
        if ($(evt.target).hasClass('order-thank')) {
            closeFixedOrder();
        }
    };

    var openFixedOrder = function (evt) {
        evt.preventDefault();
        modalOrder.addClass('order-thank--show');
        closeModalOrderButton.on('click', function () {
            closeFixedOrder();
        });

        $(document).on('click', closeFixedBackgroundClick);
    };

    callOrderModalButton.on('click', function (evt) {
        openFixedOrder(evt);
    });

    $(window).on('scroll', stickyOrderForm);
    $(window).on('scroll', showFixedButton);


    $(document).ready(function () {
        var typed = new Typed('#header_typed', {
            strings: ['тепловых пушек.', 'Бензиновых генераторов', 'Компрессоров', 'Газовых балонов'],
            stringsElement: null,
            typeSpeed: 150,
            backSpeed: 50,
            backDelay: 600,
            loop: true,
        });
    });
}