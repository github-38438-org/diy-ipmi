// Generated by CoffeeScript 1.7.1

var pressedkeys = [];
var running = false;

function sendKey(key) {
	var modkey = key;
	if (shift_pressed) modkey = "left-shift " + modkey;
	if (control_pressed) modkey = "left-ctrl " + modkey;
	if (alt_pressed) modkey = "left-alt " + modkey;
	pressedkeys.push(modkey);
	if (!running)
		sendKeysToServer();
}

function sendKeysToServer() {
	running = true;
	var key = pressedkeys.shift();
	if (key) {
		sendKeyToServer(key);
	} else
		running = false;
}

function sendKeyToServer(key) {
	$.post("key.php", { k: key }, sendKeysToServer); 
}

function resetServer() {
        if (confirm("Are you sure you want to reset the machine?")) {
		$.ajax("reset.php");
        }
}

var command_pressed, shift_pressed, control_pressed, alt_pressed = false;

(function() {
  var bind_keyboard, combo, listener, _i, _len, _ref;

  listener = new window.keypress.Listener();

  listener.should_force_event_defaults = true;

  bind_keyboard = function() {
    var combos, key_nodes, keyboard_msg_node, keys, on_down, on_shift_down, on_shift_up, on_up;
    keyboard_msg_node = $('.keyboard .message');
    $('body').bind('keydown', function(e) {
      return keyboard_msg_node.text("" + e.keyCode + " keyDown");
    }).bind('keyup', function(e) {
      return keyboard_msg_node.text("" + e.keyCode + " keyUp");
    });
    keys = $('.keyboard .key');
    key_nodes = {};
    $.each(keys, function(_, node) {
      var id, name;
      node = $(node);
      id = node.attr("id");
      name = id.substr(4);
      return key_nodes[name] = node;
    });
    on_down = function(node) {
      return node.addClass("pressed");
    };
    on_up = function(node) {
      return node.removeClass("pressed");
    };
    on_shift_down = function(node) {
      return node.addClass("shift_pressed");
    };
    on_shift_up = function(node) {
      return node.removeClass("shift_pressed");
    };
    combos = [
      {
        keys: "`",
        on_keydown: function() {
          sendKey("backquote");
          return on_down(key_nodes.accent);
        },
        on_keyup: function() {
          return on_up(key_nodes.accent);
        }
      }, {
        keys: "~",
        on_keydown: function() {
          sendKey("tilde");
          return on_shift_down(key_nodes.accent);
        },
        on_keyup: function() {
          return on_shift_up(key_nodes.accent);
        }
      }, {
        keys: "1",
        on_keydown: function() {
          sendKey("1");
          return on_down(key_nodes.one);
        },
        on_keyup: function() {
          return on_up(key_nodes.one);
        }
      }, {
        keys: "!",
        on_keydown: function() {
          sendKey("left-shift 1");
          return on_shift_down(key_nodes.one);
        },
        on_keyup: function() {
          return on_shift_up(key_nodes.one);
        }
      }, {
        keys: "2",
        on_keydown: function() {
          sendKey("2");
          return on_down(key_nodes.two);
        },
        on_keyup: function() {
          return on_up(key_nodes.two);
        }
      }, {
        keys: "@",
        on_keydown: function() {
          sendKey("left-shift 2");
          return on_shift_down(key_nodes.two);
        },
        on_keyup: function() {
          return on_shift_up(key_nodes.two);
        }
      }, {
        keys: "3",
        on_keydown: function() {
          sendKey("3");
          return on_down(key_nodes.three);
        },
        on_keyup: function() {
          return on_up(key_nodes.three);
        }
      }, {
        keys: "#",
        on_keydown: function() {
          sendKey("left-shift 3");
          return on_shift_down(key_nodes.three);
        },
        on_keyup: function() {
          return on_shift_up(key_nodes.three);
        }
      }, {
        keys: "4",
        on_keydown: function() {
          sendKey("4");
          return on_down(key_nodes.four);
        },
        on_keyup: function() {
          return on_up(key_nodes.four);
        }
      }, {
        keys: "$",
        on_keydown: function() {
          sendKey("left-shift 4");
          return on_shift_down(key_nodes.four);
        },
        on_keyup: function() {
          return on_shift_up(key_nodes.four);
        }
      }, {
        keys: "5",
        on_keydown: function() {
          sendKey("5");
          return on_down(key_nodes.five);
        },
        on_keyup: function() {
          return on_up(key_nodes.five);
        }
      }, {
        keys: "%",
        on_keydown: function() {
          sendKey("left-shift 5");
          return on_shift_down(key_nodes.five);
        },
        on_keyup: function() {
          return on_shift_up(key_nodes.five);
        }
      }, {
        keys: "6",
        on_keydown: function() {
          sendKey("6");
          return on_down(key_nodes.six);
        },
        on_keyup: function() {
          return on_up(key_nodes.six);
        }
      }, {
        keys: "^",
        on_keydown: function() {
          sendKey("left-shift 6");
          return on_shift_down(key_nodes.six);
        },
        on_keyup: function() {
          return on_shift_up(key_nodes.six);
        }
      }, {
        keys: "7",
        on_keydown: function() {
          sendKey("7");
          return on_down(key_nodes.seven);
        },
        on_keyup: function() {
          return on_up(key_nodes.seven);
        }
      }, {
        keys: "&",
        on_keydown: function() {
          sendKey("left-shift 7");
          return on_shift_down(key_nodes.seven);
        },
        on_keyup: function() {
          return on_shift_up(key_nodes.seven);
        }
      }, {
        keys: "8",
        on_keydown: function() {
          sendKey("8");
          return on_down(key_nodes.eight);
        },
        on_keyup: function() {
          return on_up(key_nodes.eight);
        }
      }, {
        keys: "*",
        on_keydown: function() {
          sendKey("left-shift 8");
          return on_shift_down(key_nodes.eight);
        },
        on_keyup: function() {
          return on_shift_up(key_nodes.eight);
        }
      }, {
        keys: "9",
        on_keydown: function() {
          sendKey("9");
          return on_down(key_nodes.nine);
        },
        on_keyup: function() {
          return on_up(key_nodes.nine);
        }
      }, {
        keys: "(",
        on_keydown: function() {
          sendKey("left-shift 9");
          return on_shift_down(key_nodes.nine);
        },
        on_keyup: function() {
          return on_shift_up(key_nodes.nine);
        }
      }, {
        keys: "0",
        on_keydown: function() {
          sendKey("0");
          return on_down(key_nodes.zero);
        },
        on_keyup: function() {
          return on_up(key_nodes.zero);
        }
      }, {
        keys: ")",
        on_keydown: function() {
          sendKey("left-shift 0");
          return on_shift_down(key_nodes.zero);
        },
        on_keyup: function() {
          return on_shift_up(key_nodes.zero);
        }
      }, {
        keys: "-",
        on_keydown: function() {
          sendKey("minus");
          return on_down(key_nodes.hyphen);
        },
        on_keyup: function() {
          return on_up(key_nodes.hyphen);
        }
      }, {
        keys: "_",
        on_keydown: function() {
          sendKey("left-shif dash");
          return on_shift_down(key_nodes.hyphen);
        },
        on_keyup: function() {
          return on_shift_up(key_nodes.hyphen);
        }
      }, {
        keys: "=",
        on_keydown: function() {
          sendKey("equals");
          return on_down(key_nodes.equals);
        },
        on_keyup: function() {
          return on_up(key_nodes.equals);
        }
      }, {
        keys: "+",
        on_keydown: function() {
          sendKey("left-shift equals");
          return on_shift_down(key_nodes.equals);
        },
        on_keyup: function() {
          return on_shift_up(key_nodes.equals);
        }
      }, {
        keys: "backspace",
        on_keydown: function() {
          sendKey("backspace");
          return on_down(key_nodes.backspace);
        },
        on_keyup: function() {
          return on_up(key_nodes.backspace);
        }
      }, {
        keys: "tab",
        on_keydown: function() {
          sendKey("tab");
          return on_down(key_nodes.tab);
        },
        on_keyup: function() {
          return on_up(key_nodes.tab);
        }
      }, {
        keys: "q",
        on_keydown: function() {
          sendKey("q");
          return on_down(key_nodes.q);
        },
        on_keyup: function() {
          return on_up(key_nodes.q);
        }
      }, {
        keys: "w",
        on_keydown: function() {
          sendKey("w");
          return on_down(key_nodes.w);
        },
        on_keyup: function() {
          return on_up(key_nodes.w);
        }
      }, {
        keys: "e",
        on_keydown: function() {
          sendKey("e");
          return on_down(key_nodes.e);
        },
        on_keyup: function() {
          return on_up(key_nodes.e);
        }
      }, {
        keys: "r",
        on_keydown: function() {
          sendKey("r");
          return on_down(key_nodes.r);
        },
        on_keyup: function() {
          return on_up(key_nodes.r);
        }
      }, {
        keys: "t",
        on_keydown: function() {
          sendKey("t");
          return on_down(key_nodes.t);
        },
        on_keyup: function() {
          return on_up(key_nodes.t);
        }
      }, {
        keys: "y",
        on_keydown: function() {
          sendKey("y");
          return on_down(key_nodes.y);
        },
        on_keyup: function() {
          return on_up(key_nodes.y);
        }
      }, {
        keys: "u",
        on_keydown: function() {
          sendKey("u");
          return on_down(key_nodes.u);
        },
        on_keyup: function() {
          return on_up(key_nodes.u);
        }
      }, {
        keys: "i",
        on_keydown: function() {
          sendKey("i");
          return on_down(key_nodes.i);
        },
        on_keyup: function() {
          return on_up(key_nodes.i);
        }
      }, {
        keys: "o",
        on_keydown: function() {
          sendKey("o");
          return on_down(key_nodes.o);
        },
        on_keyup: function() {
          return on_up(key_nodes.o);
        }
      }, {
        keys: "p",
        on_keydown: function() {
          sendKey("p");
          return on_down(key_nodes.p);
        },
        on_keyup: function() {
          return on_up(key_nodes.p);
        }
      }, {
        keys: "[",
        on_keydown: function() {
          sendKey("lbracket");
          return on_down(key_nodes.left_bracket);
        },
        on_keyup: function() {
          return on_up(key_nodes.left_bracket);
        }
      }, {
        keys: "{",
        on_keydown: function() {
          sendKey("left-shift lbracket");
          return on_shift_down(key_nodes.left_bracket);
        },
        on_keyup: function() {
          return on_shift_up(key_nodes.left_bracket);
        }
      }, {
        keys: "]",
        on_keydown: function() {
          sendKey("rbracket");
          return on_down(key_nodes.right_bracket);
        },
        on_keyup: function() {
          return on_up(key_nodes.right_bracket);
        }
      }, {
        keys: "}",
        on_keydown: function() {
          sendKey("left-shift rbracket");
          return on_shift_down(key_nodes.right_bracket);
        },
        on_keyup: function() {
          return on_shift_up(key_nodes.right_bracket);
        }
      }, {
        keys: "\\",
        on_keydown: function() {
          sendKey("backslash");
          return on_down(key_nodes.backslash);
        },
        on_keyup: function() {
          return on_up(key_nodes.backslash);
        }
      }, {
        keys: "|",
        on_keydown: function() {
          sendKey("left-shift backslash");
          return on_shift_down(key_nodes.backslash);
        },
        on_keyup: function() {
          return on_shift_up(key_nodes.backslash);
        }
      }, {
        keys: "caps_lock",
        on_keydown: function() {
          //sendKey("caps_lock");
          return on_down(key_nodes.caps_lock);
        },
        on_keyup: function() {
          return on_up(key_nodes.caps_lock);
        }
      }, {
        keys: "a",
        on_keydown: function() {
	  sendKey("a");
          return on_down(key_nodes.a);
        },
        on_keyup: function() {
          return on_up(key_nodes.a);
        }
      }, {
        keys: "s",
        on_keydown: function() {
          sendKey("s");
          return on_down(key_nodes.s);
        },
        on_keyup: function() {
          return on_up(key_nodes.s);
        }
      }, {
        keys: "d",
        on_keydown: function() {
          sendKey("d");
          return on_down(key_nodes.d);
        },
        on_keyup: function() {
          return on_up(key_nodes.d);
        }
      }, {
        keys: "f",
        on_keydown: function() {
          sendKey("f");
          return on_down(key_nodes.f);
        },
        on_keyup: function() {
          return on_up(key_nodes.f);
        }
      }, {
        keys: "g",
        on_keydown: function() {
          sendKey("g");
          return on_down(key_nodes.g);
        },
        on_keyup: function() {
          return on_up(key_nodes.g);
        }
      }, {
        keys: "h",
        on_keydown: function() {
          sendKey("h");
          return on_down(key_nodes.h);
        },
        on_keyup: function() {
          return on_up(key_nodes.h);
        }
      }, {
        keys: "j",
        on_keydown: function() {
          sendKey("j");
          return on_down(key_nodes.j);
        },
        on_keyup: function() {
          return on_up(key_nodes.j);
        }
      }, {
        keys: "k",
        on_keydown: function() {
          sendKey("k");
          return on_down(key_nodes.k);
        },
        on_keyup: function() {
          return on_up(key_nodes.k);
        }
      }, {
        keys: "l",
        on_keydown: function() {
          sendKey("l");
          return on_down(key_nodes.l);
        },
        on_keyup: function() {
          return on_up(key_nodes.l);
        }
      }, {
        keys: ";",
        on_keydown: function() {
          sendKey("semicolon");
          return on_down(key_nodes.semicolon);
        },
        on_keyup: function() {
          return on_up(key_nodes.semicolon);
        }
      }, {
        keys: ":",
        on_keydown: function() {
          sendKey("left-shift semicolon");
          return on_shift_down(key_nodes.semicolon);
        },
        on_keyup: function() {
          return on_shift_up(key_nodes.semicolon);
        }
      }, {
        keys: "\'",
        on_keydown: function() {
          sendKey("quote");
          return on_down(key_nodes.apostrophe);
        },
        on_keyup: function() {
          return on_up(key_nodes.apostrophe);
        }
      }, {
        keys: "\"",
        on_keydown: function() {
          sendKey("left-shift quote");
          return on_shift_down(key_nodes.apostrophe);
        },
        on_keyup: function() {
          return on_shift_up(key_nodes.apostrophe);
        }
      }, {
        keys: "enter",
        on_keydown: function() {
          sendKey("enter");
          return on_down(key_nodes.enter);
        },
        on_keyup: function() {
          return on_up(key_nodes.enter);
        }
      }, {
        keys: "shift",
        on_keydown: function() {
          on_down(key_nodes.left_shift);
          shift_pressed = true;
          return on_down(key_nodes.right_shift);
        },
        on_keyup: function() {
          on_up(key_nodes.left_shift);
          shift_pressed = false;
          return on_up(key_nodes.right_shift);
        }
      }, {
        keys: "z",
        on_keydown: function() {
          sendKey("z");
          return on_down(key_nodes.z);
        },
        on_keyup: function() {
          return on_up(key_nodes.z);
        }
      }, {
        keys: "x",
        on_keydown: function() {
          sendKey("x");
          return on_down(key_nodes.x);
        },
        on_keyup: function() {
          return on_up(key_nodes.x);
        }
      }, {
        keys: "c",
        on_keydown: function() {
          sendKey("c");
          return on_down(key_nodes.c);
        },
        on_keyup: function() {
          return on_up(key_nodes.c);
        }
      }, {
        keys: "v",
        on_keydown: function() {
          sendKey("v");
          return on_down(key_nodes.v);
        },
        on_keyup: function() {
          return on_up(key_nodes.v);
        }
      }, {
        keys: "b",
        on_keydown: function() {
          sendKey("b");
          return on_down(key_nodes.b);
        },
        on_keyup: function() {
          return on_up(key_nodes.b);
        }
      }, {
        keys: "n",
        on_keydown: function() {
          sendKey("n");
          return on_down(key_nodes.n);
        },
        on_keyup: function() {
          return on_up(key_nodes.n);
        }
      }, {
        keys: "m",
        on_keydown: function() {
          sendKey("m");
          return on_down(key_nodes.m);
        },
        on_keyup: function() {
          return on_up(key_nodes.m);
        }
      }, {
        keys: ",",
        on_keydown: function() {
          sendKey("comma");
          return on_down(key_nodes.comma);
        },
        on_keyup: function() {
          return on_up(key_nodes.comma);
        }
      }, {
        keys: "<",
        on_keydown: function() {
          sendKey("left-shift comma");
          return on_shift_down(key_nodes.comma);
        },
        on_keyup: function() {
          return on_shift_up(key_nodes.comma);
        }
      }, {
        keys: ".",
        on_keydown: function() {
          sendKey("period");
          return on_down(key_nodes.period);
        },
        on_keyup: function() {
          return on_up(key_nodes.period);
        }
      }, {
        keys: ">",
        on_keydown: function() {
          sendKey("left-shift period");
          return on_shift_down(key_nodes.period);
        },
        on_keyup: function() {
          return on_shift_up(key_nodes.period);
        }
      }, {
        keys: "/",
        on_keydown: function() {
          sendKey("slash");
          return on_down(key_nodes.forwardslash);
        },
        on_keyup: function() {
          return on_up(key_nodes.forwardslash);
        }
      }, {
        keys: "?",
        on_keydown: function() {
          sendKey("left-shift slash");
          return on_shift_down(key_nodes.forwardslash);
        },
        on_keyup: function() {
          return on_shift_up(key_nodes.forwardslash);
        }
      }, {
        keys: "ctrl",
        on_keydown: function() {
          on_down(key_nodes.left_ctrl);
          control_pressed = true;
          return on_down(key_nodes.right_ctrl);
        },
        on_keyup: function() {
          on_up(key_nodes.left_ctrl);
          control_pressed = false;
          return on_up(key_nodes.right_ctrl);
        }
      }, {
        keys: "alt",
        on_keydown: function() {
          on_down(key_nodes.left_alt);
          alt_pressed = true;
          return on_down(key_nodes.right_alt);
        },
        on_keyup: function() {
          on_up(key_nodes.left_alt);
          alt_pressed = false;
          return on_up(key_nodes.right_alt);
        }
      }, {
        keys: "cmd",
        on_keydown: function() {
          on_down(key_nodes.left_cmd);
          command_pressed = true;
          return on_down(key_nodes.right_cmd);
        },
        on_keyup: function() {
          on_up(key_nodes.left_cmd);
          command_pressed = false;
          return on_up(key_nodes.right_cmd);
        }
      }, {
        keys: "space",
        on_keydown: function() {
          sendKey("space");
          return on_down(key_nodes.space);
        },
        on_keyup: function() {
          return on_up(key_nodes.space);
        }
      }, {
        keys: "up",
        on_keydown: function() {
          sendKey("up");
          return on_down(key_nodes.up);
        },
        on_keyup: function() {
          return on_up(key_nodes.up);
        }
      }, {
        keys: "down",
        on_keydown: function() {
          sendKey("down");
          return on_down(key_nodes.down);
        },
        on_keyup: function() {
          return on_up(key_nodes.down);
        }
      }, {
        keys: "left",
        on_keydown: function() {
          sendKey("left");
          return on_down(key_nodes.left);
        },
        on_keyup: function() {
          return on_up(key_nodes.left);
        }
      }, {
        keys: "right",
        on_keydown: function() {
          sendKey("right");
          return on_down(key_nodes.right);
        },
        on_keyup: function() {
          return on_up(key_nodes.right);
        }
      }, {
        keys: "print",
        on_keydown: function(e) {
          //sendKey("print");
          return on_down(key_nodes.print);
        },
        on_keyup: function() {
          return on_up(key_nodes.print);
        }
      }, {
        keys: "scroll",
        on_keydown: function() {
          //sendKey("scroll");
          return on_down(key_nodes.scroll_lock);
        },
        on_keyup: function() {
          return on_up(key_nodes.scroll_lock);
        }
      }, {
        keys: "pause",
        on_keydown: function() {
          //sendKey("pause");
          return on_down(key_nodes.pause_break);
        },
        on_keyup: function() {
          return on_up(key_nodes.pause_break);
        }
      }, {
        keys: "insert",
        on_keydown: function() {
          //sendKey("insert");
          return on_down(key_nodes.insert);
        },
        on_keyup: function() {
          return on_up(key_nodes.insert);
        }
      }, {
        keys: "home",
        on_keydown: function() {
          //sendKey("home");
          return on_down(key_nodes.home);
        },
        on_keyup: function() {
          return on_up(key_nodes.home);
        }
      }, {
        keys: "pageup",
        on_keydown: function() {
          sendKey("pageup");
          return on_down(key_nodes.page_up);
        },
        on_keyup: function() {
          return on_up(key_nodes.page_up);
        }
      }, {
        keys: "delete",
        on_keydown: function() {
          sendKey("delete");
          return on_down(key_nodes["delete"]);
        },
        on_keyup: function() {
          return on_up(key_nodes["delete"]);
        }
      }, {
        keys: "end",
        on_keydown: function() {
          sendKey("end");
          return on_down(key_nodes.end);
        },
        on_keyup: function() {
          return on_up(key_nodes.end);
        }
      }, {
        keys: "pagedown",
        on_keydown: function() {
          sendKey("pagedown");
          return on_down(key_nodes.page_down);
        },
        on_keyup: function() {
          return on_up(key_nodes.page_down);
        }
      }, {
        keys: "num",
        on_keydown: function() {
          //sendKey("num");
          return on_down(key_nodes.num_lock);
        },
        on_keyup: function() {
          return on_up(key_nodes.num_lock);
        }
      }, {
        keys: "num_divide",
        on_keydown: function() {
          sendKey("kp-divide");
          return on_down(key_nodes.divide);
        },
        on_keyup: function() {
          return on_up(key_nodes.divide);
        }
      }, {
        keys: "num_multiply",
        on_keydown: function() {
          sendKey("kp-multiply");
          return on_down(key_nodes.multiply);
        },
        on_keyup: function() {
          return on_up(key_nodes.multiply);
        }
      }, {
        keys: "num_subtract",
        on_keydown: function() {
          sendKey("kp-minus");
          return on_down(key_nodes.subtract);
        },
        on_keyup: function() {
          return on_up(key_nodes.subtract);
        }
      }, {
        keys: "num_add",
        on_keydown: function() {
          sendKey("kp-plus");
          return on_down(key_nodes.add);
        },
        on_keyup: function() {
          return on_up(key_nodes.add);
        }
      }, {
        keys: "num_enter",
        on_keydown: function() {
          sendKey("enter");
          return on_down(key_nodes.num_enter);
        },
        on_keyup: function() {
          return on_up(key_nodes.num_enter);
        }
      }, {
        keys: "num_decimal",
        on_keydown: function() {
          sendKey("period");
          return on_down(key_nodes.num_decimal);
        },
        on_keyup: function() {
          return on_up(key_nodes.num_decimal);
        }
      }, {
        keys: "num_0",
        on_keydown: function() {
          sendKey("0");
          return on_down(key_nodes.num_0);
        },
        on_keyup: function() {
          return on_up(key_nodes.num_0);
        }
      }, {
        keys: "num_1",
        on_keydown: function() {
          sendKey("1");
          return on_down(key_nodes.num_1);
        },
        on_keyup: function() {
          return on_up(key_nodes.num_1);
        }
      }, {
        keys: "num_2",
        on_keydown: function() {
          sendKey("2");
          return on_down(key_nodes.num_2);
        },
        on_keyup: function() {
          return on_up(key_nodes.num_2);
        }
      }, {
        keys: "num_3",
        on_keydown: function() {
          sendKey("3");
          return on_down(key_nodes.num_3);
        },
        on_keyup: function() {
          return on_up(key_nodes.num_3);
        }
      }, {
        keys: "num_4",
        on_keydown: function() {
          sendKey("4");
          return on_down(key_nodes.num_4);
        },
        on_keyup: function() {
          return on_up(key_nodes.num_4);
        }
      }, {
        keys: "num_5",
        on_keydown: function() {
          sendKey("5");
          return on_down(key_nodes.num_5);
        },
        on_keyup: function() {
          return on_up(key_nodes.num_5);
        }
      }, {
        keys: "num_6",
        on_keydown: function() {
          sendKey("6");
          return on_down(key_nodes.num_6);
        },
        on_keyup: function() {
          return on_up(key_nodes.num_6);
        }
      }, {
        keys: "num_7",
        on_keydown: function() {
          sendKey("7");
          return on_down(key_nodes.num_7);
        },
        on_keyup: function() {
          return on_up(key_nodes.num_7);
        }
      }, {
        keys: "num_8",
        on_keydown: function() {
          sendKey("8");
          return on_down(key_nodes.num_8);
        },
        on_keyup: function() {
          return on_up(key_nodes.num_8);
        }
      }, {
        keys: "num_9",
        on_keydown: function() {
          sendKey("9");
          return on_down(key_nodes.num_9);
        },
        on_keyup: function() {
          return on_up(key_nodes.num_9);
        }
      }
    ];
    return listener.register_many(combos);
  };

  bind_keyboard();


  if (navigator.userAgent.indexOf("Mac OS X") !== -1) {
    $('#key_scroll_lock, #key_pause_break, #key_insert').css("opacity", 0.5);
  }

}).call(this);

window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if([37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);
