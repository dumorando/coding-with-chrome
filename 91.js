(self.webpackChunkcoding_with_chrome=self.webpackChunkcoding_with_chrome||[]).push([[91],{80091:function(e,T){var _,a,s;a=[],void 0===(s="function"==typeof(_=function(){"use strict";var e=e||{Msg:Object.create(null)};return e.Msg.ADD_COMMENT="Añadir comentario",e.Msg.CANNOT_DELETE_VARIABLE_PROCEDURE="No se puede eliminar la variable '%1' porque es parte de la definición de la función '%2'",e.Msg.CHANGE_VALUE_TITLE="Cambiar el valor:",e.Msg.CLEAN_UP="Limpiar los bloques",e.Msg.COLLAPSED_WARNINGS_WARNING="Bloques colapsados contienen advertencias.",e.Msg.COLLAPSE_ALL="Contraer bloques",e.Msg.COLLAPSE_BLOCK="Contraer bloque",e.Msg.COLOUR_BLEND_COLOUR1="color 1",e.Msg.COLOUR_BLEND_COLOUR2="color 2",e.Msg.COLOUR_BLEND_HELPURL="https://meyerweb.com/eric/tools/color-blend/#:::rgbp",e.Msg.COLOUR_BLEND_RATIO="proporción",e.Msg.COLOUR_BLEND_TITLE="combinar",e.Msg.COLOUR_BLEND_TOOLTIP="Combina dos colores con una proporción determinada (0,0 - 1,0).",e.Msg.COLOUR_PICKER_HELPURL="https://es.wikipedia.org/wiki/Color",e.Msg.COLOUR_PICKER_TOOLTIP="Elige un color de la paleta.",e.Msg.COLOUR_RANDOM_HELPURL="http://randomcolour.com",e.Msg.COLOUR_RANDOM_TITLE="color aleatorio",e.Msg.COLOUR_RANDOM_TOOLTIP="Elige un color al azar.",e.Msg.COLOUR_RGB_BLUE="azul",e.Msg.COLOUR_RGB_GREEN="verde",e.Msg.COLOUR_RGB_HELPURL="https://www.december.com/html/spec/colorpercompact.html",e.Msg.COLOUR_RGB_RED="rojo",e.Msg.COLOUR_RGB_TITLE="colorear con",e.Msg.COLOUR_RGB_TOOLTIP="Crea un color con cantidades específicas de rojo, verde y azul. Todos los valores deben encontrarse entre 0 y 100.",e.Msg.CONTROLS_FLOW_STATEMENTS_HELPURL="https://github.com/google/blockly/wiki/Loops#loop-termination-blocks",e.Msg.CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK="romper el bucle",e.Msg.CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE="continuar con la siguiente iteración del bucle",e.Msg.CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK="Romper el bucle que lo contiene.",e.Msg.CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE="Saltar el resto de este bucle, y continuar con la siguiente iteración.",e.Msg.CONTROLS_FLOW_STATEMENTS_WARNING="Atención: este bloque puede usarse solamente dentro de un bucle.",e.Msg.CONTROLS_FOREACH_HELPURL="https://es.wikipedia.org/wiki/Foreach",e.Msg.CONTROLS_FOREACH_TITLE="para cada elemento %1 en la lista %2",e.Msg.CONTROLS_FOREACH_TOOLTIP="Para cada elemento en una lista, establecer la variable '%1' al elemento y luego hacer algunas declaraciones.",e.Msg.CONTROLS_FOR_HELPURL="https://github.com/google/blockly/wiki/Loops#count-with",e.Msg.CONTROLS_FOR_TITLE="contar con %1 desde %2 hasta %3 de a %4",e.Msg.CONTROLS_FOR_TOOLTIP='Hacer que la variable "%1" tome los valores desde el número de inicio hasta el número final, contando con el intervalo especificado, y hacer los bloques especificados.',e.Msg.CONTROLS_IF_ELSEIF_TOOLTIP="Agregar una condición a este bloque.",e.Msg.CONTROLS_IF_ELSE_TOOLTIP="Agregar una condición general final a este bloque.",e.Msg.CONTROLS_IF_HELPURL="https://github.com/google/blockly/wiki/IfElse",e.Msg.CONTROLS_IF_IF_TOOLTIP="Agregar, eliminar o reordenar las secciones para reconfigurar este bloque.",e.Msg.CONTROLS_IF_MSG_ELSE="sino",e.Msg.CONTROLS_IF_MSG_ELSEIF="sino si",e.Msg.CONTROLS_IF_MSG_IF="si",e.Msg.CONTROLS_IF_TOOLTIP_1="Si un valor es verdadero, entonces hacer algunas declaraciones.",e.Msg.CONTROLS_IF_TOOLTIP_2="Si un valor es verdadero, entonces hacer el primer bloque de declaraciones.  De lo contrario, hacer el segundo bloque de declaraciones.",e.Msg.CONTROLS_IF_TOOLTIP_3="Si el primer valor es verdadero, entonces hacer el primer bloque de declaraciones. De lo contrario, si el segundo valor es verdadero, hacer el segundo bloque de declaraciones.",e.Msg.CONTROLS_IF_TOOLTIP_4="Si el primer valor es verdadero, entonces hacer el primer bloque de declaraciones. De lo contrario, si el segundo valor es verdadero, hacer el segundo bloque de declaraciones. Si ninguno de los valores son verdaderos, hacer el último bloque de declaraciones.",e.Msg.CONTROLS_REPEAT_HELPURL="https://es.wikipedia.org/wiki/Bucle_for",e.Msg.CONTROLS_REPEAT_INPUT_DO="hacer",e.Msg.CONTROLS_REPEAT_TITLE="repetir %1 veces",e.Msg.CONTROLS_REPEAT_TOOLTIP="Hacer algunas declaraciones varias veces.",e.Msg.CONTROLS_WHILEUNTIL_HELPURL="https://github.com/google/blockly/wiki/Loops#repeat",e.Msg.CONTROLS_WHILEUNTIL_OPERATOR_UNTIL="repetir hasta",e.Msg.CONTROLS_WHILEUNTIL_OPERATOR_WHILE="repetir mientras",e.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL="Mientras un valor sea falso, entonces hacer algunas declaraciones.",e.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_WHILE="Mientras un valor sea verdadero, entonces hacer algunas declaraciones.",e.Msg.DELETE_ALL_BLOCKS="¿Eliminar todos los %1 bloques?",e.Msg.DELETE_BLOCK="Eliminar bloque",e.Msg.DELETE_VARIABLE="Borrar la variable '%1'",e.Msg.DELETE_VARIABLE_CONFIRMATION="¿Borrar %1 usos de la variable '%2'?",e.Msg.DELETE_X_BLOCKS="Eliminar %1 bloques",e.Msg.DIALOG_CANCEL="Cancelar",e.Msg.DIALOG_OK="Aceptar",e.Msg.DISABLE_BLOCK="Desactivar bloque",e.Msg.DUPLICATE_BLOCK="Duplicar",e.Msg.DUPLICATE_COMMENT="Duplicar comentario",e.Msg.ENABLE_BLOCK="Activar bloque",e.Msg.EXPAND_ALL="Expandir bloques",e.Msg.EXPAND_BLOCK="Expandir bloque",e.Msg.EXTERNAL_INPUTS="Entradas externas",e.Msg.HELP="Ayuda",e.Msg.INLINE_INPUTS="Entradas en línea",e.Msg.LISTS_CREATE_EMPTY_HELPURL="https://github.com/google/blockly/wiki/Lists#create-empty-list",e.Msg.LISTS_CREATE_EMPTY_TITLE="crear lista vacía",e.Msg.LISTS_CREATE_EMPTY_TOOLTIP="Devuelve una lista, de longitud 0, sin ningún dato",e.Msg.LISTS_CREATE_WITH_CONTAINER_TITLE_ADD="lista",e.Msg.LISTS_CREATE_WITH_CONTAINER_TOOLTIP="Agregar, eliminar o reorganizar las secciones para reconfigurar este bloque de lista.",e.Msg.LISTS_CREATE_WITH_HELPURL="https://github.com/google/blockly/wiki/Lists#create-list-with",e.Msg.LISTS_CREATE_WITH_INPUT_WITH="crear lista con",e.Msg.LISTS_CREATE_WITH_ITEM_TOOLTIP="Agregar un elemento a la lista.",e.Msg.LISTS_CREATE_WITH_TOOLTIP="Crear una lista con cualquier número de elementos.",e.Msg.LISTS_GET_INDEX_FIRST="primero",e.Msg.LISTS_GET_INDEX_FROM_END="# del final",e.Msg.LISTS_GET_INDEX_FROM_START="#",e.Msg.LISTS_GET_INDEX_GET="obtener",e.Msg.LISTS_GET_INDEX_GET_REMOVE="obtener y eliminar",e.Msg.LISTS_GET_INDEX_LAST="último",e.Msg.LISTS_GET_INDEX_RANDOM="aleatorio",e.Msg.LISTS_GET_INDEX_REMOVE="eliminar",e.Msg.LISTS_GET_INDEX_TAIL="",e.Msg.LISTS_GET_INDEX_TOOLTIP_GET_FIRST="Devuelve el primer elemento de una lista.",e.Msg.LISTS_GET_INDEX_TOOLTIP_GET_FROM="Devuelve el elemento en la posición especificada en una lista.",e.Msg.LISTS_GET_INDEX_TOOLTIP_GET_LAST="Devuelve el último elemento de una lista.",e.Msg.LISTS_GET_INDEX_TOOLTIP_GET_RANDOM="Devuelve un elemento aleatorio en una lista.",e.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FIRST="Elimina y devuelve el primer elemento de una lista.",e.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM="Elimina y devuelve el elemento en la posición especificada en una lista.",e.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_LAST="Elimina y devuelve el último elemento de una lista.",e.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_RANDOM="Elimina y devuelve un elemento aleatorio en una lista.",e.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_FIRST="Elimina el primer elemento de una lista.",e.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM="Elimina el elemento en la posición especificada en una lista.",e.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_LAST="Elimina el último elemento de una lista.",e.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_RANDOM="Elimina un elemento aleatorio en una lista.",e.Msg.LISTS_GET_SUBLIST_END_FROM_END="hasta # del final",e.Msg.LISTS_GET_SUBLIST_END_FROM_START="hasta #",e.Msg.LISTS_GET_SUBLIST_END_LAST="hasta el último",e.Msg.LISTS_GET_SUBLIST_HELPURL="https://github.com/google/blockly/wiki/Lists#getting-a-sublist",e.Msg.LISTS_GET_SUBLIST_START_FIRST="obtener sublista desde el primero",e.Msg.LISTS_GET_SUBLIST_START_FROM_END="obtener sublista desde # del final",e.Msg.LISTS_GET_SUBLIST_START_FROM_START="obtener sublista desde #",e.Msg.LISTS_GET_SUBLIST_TAIL="",e.Msg.LISTS_GET_SUBLIST_TOOLTIP="Crea una copia de la parte especificada de una lista.",e.Msg.LISTS_INDEX_FROM_END_TOOLTIP="%1 es el último elemento.",e.Msg.LISTS_INDEX_FROM_START_TOOLTIP="%1 es el primer elemento.",e.Msg.LISTS_INDEX_OF_FIRST="encontrar la primera aparición del elemento",e.Msg.LISTS_INDEX_OF_HELPURL="https://github.com/google/blockly/wiki/Lists#getting-items-from-a-list",e.Msg.LISTS_INDEX_OF_LAST="encontrar la última aparición del elemento",e.Msg.LISTS_INDEX_OF_TOOLTIP="Devuelve el índice de la primera/última aparición del elemento en la lista. Devuelve %1 si el elemento no se encuentra.",e.Msg.LISTS_INLIST="en la lista",e.Msg.LISTS_ISEMPTY_HELPURL="https://github.com/google/blockly/wiki/Lists#is-empty",e.Msg.LISTS_ISEMPTY_TITLE="%1 está vacía",e.Msg.LISTS_ISEMPTY_TOOLTIP="Devuelve verdadero si la lista está vacía.",e.Msg.LISTS_LENGTH_HELPURL="https://github.com/google/blockly/wiki/Lists#length-of",e.Msg.LISTS_LENGTH_TITLE="longitud de %1",e.Msg.LISTS_LENGTH_TOOLTIP="Devuelve la longitud de una lista.",e.Msg.LISTS_REPEAT_HELPURL="https://github.com/google/blockly/wiki/Lists#create-list-with",e.Msg.LISTS_REPEAT_TITLE="crear lista con el elemento %1 repetido %2 veces",e.Msg.LISTS_REPEAT_TOOLTIP="Crea una lista que consta de un valor dado repetido el número de veces especificado.",e.Msg.LISTS_REVERSE_HELPURL="https://github.com/google/blockly/wiki/Lists#reversing-a-list",e.Msg.LISTS_REVERSE_MESSAGE0="invertir %1",e.Msg.LISTS_REVERSE_TOOLTIP="Invertir una copia de una lista.",e.Msg.LISTS_SET_INDEX_HELPURL="https://github.com/google/blockly/wiki/Lists#in-list--set",e.Msg.LISTS_SET_INDEX_INPUT_TO="como",e.Msg.LISTS_SET_INDEX_INSERT="insertar en",e.Msg.LISTS_SET_INDEX_SET="establecer",e.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_FIRST="Inserta el elemento al inicio de una lista.",e.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_FROM="Inserta el elemento en la posición especificada en una lista.",e.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_LAST="Añade el elemento al final de una lista.",e.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_RANDOM="Inserta el elemento aleatoriamente en una lista.",e.Msg.LISTS_SET_INDEX_TOOLTIP_SET_FIRST="Establece el primer elemento de una lista.",e.Msg.LISTS_SET_INDEX_TOOLTIP_SET_FROM="Establece el elemento en la posición especificada en una lista.",e.Msg.LISTS_SET_INDEX_TOOLTIP_SET_LAST="Establece el último elemento de una lista.",e.Msg.LISTS_SET_INDEX_TOOLTIP_SET_RANDOM="Establece un elemento aleatorio en una lista.",e.Msg.LISTS_SORT_HELPURL="https://github.com/google/blockly/wiki/Lists#sorting-a-list",e.Msg.LISTS_SORT_ORDER_ASCENDING="ascendente",e.Msg.LISTS_SORT_ORDER_DESCENDING="descendente",e.Msg.LISTS_SORT_TITLE="orden %1 %2 %3",e.Msg.LISTS_SORT_TOOLTIP="Ordenar una copia de una lista.",e.Msg.LISTS_SORT_TYPE_IGNORECASE="alfabético, ignorar mayúscula/minúscula",e.Msg.LISTS_SORT_TYPE_NUMERIC="numérico",e.Msg.LISTS_SORT_TYPE_TEXT="alfabético",e.Msg.LISTS_SPLIT_HELPURL="https://github.com/google/blockly/wiki/Lists#splitting-strings-and-joining-lists",e.Msg.LISTS_SPLIT_LIST_FROM_TEXT="hacer lista a partir de texto",e.Msg.LISTS_SPLIT_TEXT_FROM_LIST="hacer texto a partir de lista",e.Msg.LISTS_SPLIT_TOOLTIP_JOIN="Unir una lista de textos en un solo texto, separado por un delimitador.",e.Msg.LISTS_SPLIT_TOOLTIP_SPLIT="Dividir el texto en una lista de textos, separando en cada delimitador.",e.Msg.LISTS_SPLIT_WITH_DELIMITER="con delimitador",e.Msg.LOGIC_BOOLEAN_FALSE="falso",e.Msg.LOGIC_BOOLEAN_HELPURL="https://github.com/google/blockly/wiki/Logic#values",e.Msg.LOGIC_BOOLEAN_TOOLTIP="Devuelve verdadero o falso.",e.Msg.LOGIC_BOOLEAN_TRUE="verdadero",e.Msg.LOGIC_COMPARE_HELPURL="https://es.wikipedia.org/wiki/Desigualdad_matemática",e.Msg.LOGIC_COMPARE_TOOLTIP_EQ="Devuelve verdadero si ambas entradas son iguales.",e.Msg.LOGIC_COMPARE_TOOLTIP_GT="Devuelve verdadero si la primera entrada es mayor que la segunda entrada.",e.Msg.LOGIC_COMPARE_TOOLTIP_GTE="Devuelve verdadero si la primera entrada es mayor o igual a la segunda entrada.",e.Msg.LOGIC_COMPARE_TOOLTIP_LT="Devuelve verdadero si la primera entrada es menor que la segunda entrada.",e.Msg.LOGIC_COMPARE_TOOLTIP_LTE="Devuelve verdadero si la primera entrada es menor que o igual a la segunda entrada.",e.Msg.LOGIC_COMPARE_TOOLTIP_NEQ="Devuelve verdadero si ambas entradas son distintas.",e.Msg.LOGIC_NEGATE_HELPURL="https://github.com/google/blockly/wiki/Logic#not",e.Msg.LOGIC_NEGATE_TITLE="no %1",e.Msg.LOGIC_NEGATE_TOOLTIP="Devuelve verdadero si la entrada es falsa. Devuelve falso si la entrada es verdadera.",e.Msg.LOGIC_NULL="nulo",e.Msg.LOGIC_NULL_HELPURL="https://en.wikipedia.org/wiki/Nullable_type",e.Msg.LOGIC_NULL_TOOLTIP="Devuelve nulo.",e.Msg.LOGIC_OPERATION_AND="y",e.Msg.LOGIC_OPERATION_HELPURL="https://github.com/google/blockly/wiki/Logic#logical-operations",e.Msg.LOGIC_OPERATION_OR="o",e.Msg.LOGIC_OPERATION_TOOLTIP_AND="Devuelve verdadero si ambas entradas son verdaderas.",e.Msg.LOGIC_OPERATION_TOOLTIP_OR="Devuelve verdadero si al menos una de las entradas es verdadera.",e.Msg.LOGIC_TERNARY_CONDITION="prueba",e.Msg.LOGIC_TERNARY_HELPURL="https://en.wikipedia.org/wiki/%3F:",e.Msg.LOGIC_TERNARY_IF_FALSE="si es falso",e.Msg.LOGIC_TERNARY_IF_TRUE="si es verdadero",e.Msg.LOGIC_TERNARY_TOOLTIP='Comprueba la condición en "prueba". Si la condición es verdadera, devuelve el valor "si es verdadero"; de lo contrario, devuelve el valor "si es falso".',e.Msg.MATH_ADDITION_SYMBOL="+",e.Msg.MATH_ARITHMETIC_HELPURL="https://es.wikipedia.org/wiki/Aritmética",e.Msg.MATH_ARITHMETIC_TOOLTIP_ADD="Devuelve la suma de ambos números.",e.Msg.MATH_ARITHMETIC_TOOLTIP_DIVIDE="Devuelve el cociente de ambos números.",e.Msg.MATH_ARITHMETIC_TOOLTIP_MINUS="Devuelve la diferencia de ambos números.",e.Msg.MATH_ARITHMETIC_TOOLTIP_MULTIPLY="Devuelve el producto de ambos números.",e.Msg.MATH_ARITHMETIC_TOOLTIP_POWER="Devuelve el primer número elevado a la potencia del segundo.",e.Msg.MATH_ATAN2_HELPURL="https://es.wikipedia.org/wiki/Arcotangente_de_dos_par%C3%A1metros",e.Msg.MATH_ATAN2_TITLE="Arcotangente de X:%1 Y:%2",e.Msg.MATH_ATAN2_TOOLTIP="Regresar el arcotangente del punto (X,Y) en grados de -180 a 180.",e.Msg.MATH_CHANGE_HELPURL="https://en.wikipedia.org/wiki/Programming_idiom#Incrementing_a_counter",e.Msg.MATH_CHANGE_TITLE="añadir %2 a %1",e.Msg.MATH_CHANGE_TOOLTIP="Añadir un número a la variable «%1».",e.Msg.MATH_CONSTANT_HELPURL="https://es.wikipedia.org/wiki/Anexo:Constantes_matemáticas",e.Msg.MATH_CONSTANT_TOOLTIP="Devuelve una de las constantes comunes: π (3.141…), e (2.718…), φ (1.618…), sqrt(2) (1.414…), sqrt(½) (0.707…) o ∞ (infinito).",e.Msg.MATH_CONSTRAIN_HELPURL="https://en.wikipedia.org/wiki/Clamping_(graphics)",e.Msg.MATH_CONSTRAIN_TITLE="limitar %1 entre %2 y %3",e.Msg.MATH_CONSTRAIN_TOOLTIP="Limitar un número entre los límites especificados (inclusive).",e.Msg.MATH_DIVISION_SYMBOL="÷",e.Msg.MATH_IS_DIVISIBLE_BY="es divisible por",e.Msg.MATH_IS_EVEN="es par",e.Msg.MATH_IS_NEGATIVE="es negativo",e.Msg.MATH_IS_ODD="es impar",e.Msg.MATH_IS_POSITIVE="es positivo",e.Msg.MATH_IS_PRIME="es primo",e.Msg.MATH_IS_TOOLTIP="Comprueba si un número es par, impar, primo, entero, positivo, negativo, o si es divisible por un número determinado. Devuelve verdadero o falso.",e.Msg.MATH_IS_WHOLE="es entero",e.Msg.MATH_MODULO_HELPURL="https://en.wikipedia.org/wiki/Modulo_operation",e.Msg.MATH_MODULO_TITLE="resto de %1 ÷ %2",e.Msg.MATH_MODULO_TOOLTIP="Devuelve el resto al dividir los dos números.",e.Msg.MATH_MULTIPLICATION_SYMBOL="×",e.Msg.MATH_NUMBER_HELPURL="https://es.wikipedia.org/wiki/Número",e.Msg.MATH_NUMBER_TOOLTIP="Un número.",e.Msg.MATH_ONLIST_HELPURL="",e.Msg.MATH_ONLIST_OPERATOR_AVERAGE="promedio de la lista",e.Msg.MATH_ONLIST_OPERATOR_MAX="máximo de la lista",e.Msg.MATH_ONLIST_OPERATOR_MEDIAN="mediana de la lista",e.Msg.MATH_ONLIST_OPERATOR_MIN="mínimo de la lista",e.Msg.MATH_ONLIST_OPERATOR_MODE="modas de la lista",e.Msg.MATH_ONLIST_OPERATOR_RANDOM="elemento aleatorio de la lista",e.Msg.MATH_ONLIST_OPERATOR_STD_DEV="desviación estándar de la lista",e.Msg.MATH_ONLIST_OPERATOR_SUM="suma de la lista",e.Msg.MATH_ONLIST_TOOLTIP_AVERAGE="Devuelve el promedio (media aritmética) de los valores numéricos en la lista.",e.Msg.MATH_ONLIST_TOOLTIP_MAX="Devuelve el número más grande en la lista.",e.Msg.MATH_ONLIST_TOOLTIP_MEDIAN="Devuelve la mediana en la lista.",e.Msg.MATH_ONLIST_TOOLTIP_MIN="Devuelve el número más pequeño en la lista.",e.Msg.MATH_ONLIST_TOOLTIP_MODE="Devuelve una lista de los elementos más comunes en la lista.",e.Msg.MATH_ONLIST_TOOLTIP_RANDOM="Devuelve un elemento aleatorio de la lista.",e.Msg.MATH_ONLIST_TOOLTIP_STD_DEV="Devuelve la desviación estándar de la lista.",e.Msg.MATH_ONLIST_TOOLTIP_SUM="Devuelve la suma de todos los números en la lista.",e.Msg.MATH_POWER_SYMBOL="^",e.Msg.MATH_RANDOM_FLOAT_HELPURL="https://es.wikipedia.org/wiki/Generador_de_números_aleatorios",e.Msg.MATH_RANDOM_FLOAT_TITLE_RANDOM="fracción aleatoria",e.Msg.MATH_RANDOM_FLOAT_TOOLTIP="Devuelve una fracción aleatoria entre 0,0 (ambos inclusive) y 1.0 (exclusivo).",e.Msg.MATH_RANDOM_INT_HELPURL="https://es.wikipedia.org/wiki/Generador_de_números_aleatorios",e.Msg.MATH_RANDOM_INT_TITLE="entero aleatorio de %1 a %2",e.Msg.MATH_RANDOM_INT_TOOLTIP="Devuelve un entero aleatorio entre los dos límites especificados, inclusive.",e.Msg.MATH_ROUND_HELPURL="https://es.wikipedia.org/wiki/Redondeo",e.Msg.MATH_ROUND_OPERATOR_ROUND="redondear",e.Msg.MATH_ROUND_OPERATOR_ROUNDDOWN="redondear a la baja",e.Msg.MATH_ROUND_OPERATOR_ROUNDUP="redondear al alza",e.Msg.MATH_ROUND_TOOLTIP="Redondear un número al alza o a la baja.",e.Msg.MATH_SINGLE_HELPURL="https://es.wikipedia.org/wiki/Ra%C3%ADz_cuadrada",e.Msg.MATH_SINGLE_OP_ABSOLUTE="absoluto",e.Msg.MATH_SINGLE_OP_ROOT="raíz cuadrada",e.Msg.MATH_SINGLE_TOOLTIP_ABS="Devuelve el valor absoluto de un número.",e.Msg.MATH_SINGLE_TOOLTIP_EXP="Devuelve e a la potencia de un número.",e.Msg.MATH_SINGLE_TOOLTIP_LN="Devuelve el logaritmo natural de un número.",e.Msg.MATH_SINGLE_TOOLTIP_LOG10="Devuelve el logaritmo base 10 de un número.",e.Msg.MATH_SINGLE_TOOLTIP_NEG="Devuelve la negación de un número.",e.Msg.MATH_SINGLE_TOOLTIP_POW10="Devuelve 10 a la potencia de un número.",e.Msg.MATH_SINGLE_TOOLTIP_ROOT="Devuelve la raíz cuadrada de un número.",e.Msg.MATH_SUBTRACTION_SYMBOL="-",e.Msg.MATH_TRIG_ACOS="acos",e.Msg.MATH_TRIG_ASIN="asin",e.Msg.MATH_TRIG_ATAN="atan",e.Msg.MATH_TRIG_COS="cos",e.Msg.MATH_TRIG_HELPURL="https://es.wikipedia.org/wiki/Función_trigonométrica",e.Msg.MATH_TRIG_SIN="sin",e.Msg.MATH_TRIG_TAN="tan",e.Msg.MATH_TRIG_TOOLTIP_ACOS="Devuelve el arcocoseno de un número.",e.Msg.MATH_TRIG_TOOLTIP_ASIN="Devuelve el arcoseno de un número.",e.Msg.MATH_TRIG_TOOLTIP_ATAN="Devuelve el arcotangente de un número.",e.Msg.MATH_TRIG_TOOLTIP_COS="Devuelve el coseno de un grado (no radián).",e.Msg.MATH_TRIG_TOOLTIP_SIN="Devuelve el seno de un grado (no radián).",e.Msg.MATH_TRIG_TOOLTIP_TAN="Devuelve la tangente de un grado (no radián).",e.Msg.NEW_COLOUR_VARIABLE="Crear una variable de color...",e.Msg.NEW_NUMBER_VARIABLE="Crear una variable de número...",e.Msg.NEW_STRING_VARIABLE="Crear una variable de cadena...",e.Msg.NEW_VARIABLE="Crear variable...",e.Msg.NEW_VARIABLE_TITLE="Nombre de variable nueva:",e.Msg.NEW_VARIABLE_TYPE_TITLE="Nuevo tipo de variable:",e.Msg.ORDINAL_NUMBER_SUFFIX="",e.Msg.PROCEDURES_ALLOW_STATEMENTS="permitir declaraciones",e.Msg.PROCEDURES_BEFORE_PARAMS="con:",e.Msg.PROCEDURES_CALLNORETURN_HELPURL="https://es.wikipedia.org/wiki/Subrutina",e.Msg.PROCEDURES_CALLNORETURN_TOOLTIP="Ejecuta la función definida por el usuario '%1'.",e.Msg.PROCEDURES_CALLRETURN_HELPURL="https://es.wikipedia.org/wiki/Subrutina",e.Msg.PROCEDURES_CALLRETURN_TOOLTIP="Ejecuta la función definida por el usuario '%1' y usa su salida.",e.Msg.PROCEDURES_CALL_BEFORE_PARAMS="con:",e.Msg.PROCEDURES_CREATE_DO="Crear '%1'",e.Msg.PROCEDURES_DEFNORETURN_COMMENT="Describe esta función...",e.Msg.PROCEDURES_DEFNORETURN_DO="",e.Msg.PROCEDURES_DEFNORETURN_HELPURL="https://en.wikipedia.org/wiki/Subroutine",e.Msg.PROCEDURES_DEFNORETURN_PROCEDURE="hacer algo",e.Msg.PROCEDURES_DEFNORETURN_TITLE="para",e.Msg.PROCEDURES_DEFNORETURN_TOOLTIP="Crea una función sin salida.",e.Msg.PROCEDURES_DEFRETURN_HELPURL="https://en.wikipedia.org/wiki/Subroutine",e.Msg.PROCEDURES_DEFRETURN_RETURN="devuelve",e.Msg.PROCEDURES_DEFRETURN_TOOLTIP="Crea una función con una salida.",e.Msg.PROCEDURES_DEF_DUPLICATE_WARNING="Advertencia: Esta función tiene parámetros duplicados.",e.Msg.PROCEDURES_HIGHLIGHT_DEF="Destacar definición de la función",e.Msg.PROCEDURES_IFRETURN_HELPURL="https://c2.com/cgi/wiki?GuardClause",e.Msg.PROCEDURES_IFRETURN_TOOLTIP="Si un valor es verdadero, entonces devuelve un segundo valor.",e.Msg.PROCEDURES_IFRETURN_WARNING="Advertencia: Este bloque solo puede ser utilizado dentro de la definición de una función.",e.Msg.PROCEDURES_MUTATORARG_TITLE="nombre de entrada:",e.Msg.PROCEDURES_MUTATORARG_TOOLTIP="Añadir una entrada a la función.",e.Msg.PROCEDURES_MUTATORCONTAINER_TITLE="entradas",e.Msg.PROCEDURES_MUTATORCONTAINER_TOOLTIP="Añadir, eliminar o reordenar entradas para esta función.",e.Msg.REDO="Rehacer",e.Msg.REMOVE_COMMENT="Eliminar comentario",e.Msg.RENAME_VARIABLE="Renombrar variable...",e.Msg.RENAME_VARIABLE_TITLE="Renombrar todas las variables '%1' a:",e.Msg.TEXT_APPEND_HELPURL="https://github.com/google/blockly/wiki/Text#text-modification",e.Msg.TEXT_APPEND_TITLE="a %1 añade el texto %2",e.Msg.TEXT_APPEND_TOOLTIP="Añadir texto a la variable '%1'.",e.Msg.TEXT_CHANGECASE_HELPURL="https://github.com/google/blockly/wiki/Text#adjusting-text-case",e.Msg.TEXT_CHANGECASE_OPERATOR_LOWERCASE="a minúsculas",e.Msg.TEXT_CHANGECASE_OPERATOR_TITLECASE="a Mayúsculas Cada Palabra",e.Msg.TEXT_CHANGECASE_OPERATOR_UPPERCASE="a MAYÚSCULAS",e.Msg.TEXT_CHANGECASE_TOOLTIP="Devuelve una copia del texto en un tamaño diferente.",e.Msg.TEXT_CHARAT_FIRST="obtener la primera letra",e.Msg.TEXT_CHARAT_FROM_END="obtener la letra # del final",e.Msg.TEXT_CHARAT_FROM_START="obtener la letra #",e.Msg.TEXT_CHARAT_HELPURL="https://github.com/google/blockly/wiki/Text#extracting-text",e.Msg.TEXT_CHARAT_LAST="obtener la última letra",e.Msg.TEXT_CHARAT_RANDOM="obtener letra aleatoria",e.Msg.TEXT_CHARAT_TAIL="",e.Msg.TEXT_CHARAT_TITLE="en el texto %1 %2",e.Msg.TEXT_CHARAT_TOOLTIP="Devuelve la letra en la posición especificada.",e.Msg.TEXT_COUNT_HELPURL="https://github.com/google/blockly/wiki/Text#counting-substrings",e.Msg.TEXT_COUNT_MESSAGE0="contar %1 en %2",e.Msg.TEXT_COUNT_TOOLTIP="Cuantas veces aparece un texto dentro de otro texto.",e.Msg.TEXT_CREATE_JOIN_ITEM_TOOLTIP="Agregar un elemento al texto.",e.Msg.TEXT_CREATE_JOIN_TITLE_JOIN="unir",e.Msg.TEXT_CREATE_JOIN_TOOLTIP="Agregar, eliminar o reordenar las secciones para reconfigurar este bloque de texto.",e.Msg.TEXT_GET_SUBSTRING_END_FROM_END="hasta la letra # del final",e.Msg.TEXT_GET_SUBSTRING_END_FROM_START="hasta la letra #",e.Msg.TEXT_GET_SUBSTRING_END_LAST="hasta la última letra",e.Msg.TEXT_GET_SUBSTRING_HELPURL="https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text",e.Msg.TEXT_GET_SUBSTRING_INPUT_IN_TEXT="en el texto",e.Msg.TEXT_GET_SUBSTRING_START_FIRST="obtener subcadena desde la primera letra",e.Msg.TEXT_GET_SUBSTRING_START_FROM_END="obtener subcadena desde la letra # del final",e.Msg.TEXT_GET_SUBSTRING_START_FROM_START="obtener subcadena desde la letra #",e.Msg.TEXT_GET_SUBSTRING_TAIL="",e.Msg.TEXT_GET_SUBSTRING_TOOLTIP="Devuelve una porción determinada del texto.",e.Msg.TEXT_INDEXOF_HELPURL="https://github.com/google/blockly/wiki/Text#finding-text",e.Msg.TEXT_INDEXOF_OPERATOR_FIRST="encontrar la primera aparición del texto",e.Msg.TEXT_INDEXOF_OPERATOR_LAST="encontrar la última aparición del texto",e.Msg.TEXT_INDEXOF_TITLE="en el texto %1 %2 %3",e.Msg.TEXT_INDEXOF_TOOLTIP="Devuelve el índice de la primera/última aparición del primer texto en el segundo texto. Devuelve %1 si el texto no se encuentra.",e.Msg.TEXT_ISEMPTY_HELPURL="https://github.com/google/blockly/wiki/Text#checking-for-empty-text",e.Msg.TEXT_ISEMPTY_TITLE="%1 está vacío",e.Msg.TEXT_ISEMPTY_TOOLTIP="Devuelve verdadero si el texto proporcionado está vacío.",e.Msg.TEXT_JOIN_HELPURL="https://github.com/google/blockly/wiki/Text#text-creation",e.Msg.TEXT_JOIN_TITLE_CREATEWITH="crear texto con",e.Msg.TEXT_JOIN_TOOLTIP="Crear un fragmento de texto al unir cualquier número de elementos.",e.Msg.TEXT_LENGTH_HELPURL="https://github.com/google/blockly/wiki/Text#text-modification",e.Msg.TEXT_LENGTH_TITLE="longitud de %1",e.Msg.TEXT_LENGTH_TOOLTIP="Devuelve el número de letras (espacios incluidos) del texto proporcionado.",e.Msg.TEXT_PRINT_HELPURL="https://github.com/google/blockly/wiki/Text#printing-text",e.Msg.TEXT_PRINT_TITLE="imprimir %1",e.Msg.TEXT_PRINT_TOOLTIP="Imprimir el texto, número u otro valor especificado.",e.Msg.TEXT_PROMPT_HELPURL="https://github.com/google/blockly/wiki/Text#getting-input-from-the-user",e.Msg.TEXT_PROMPT_TOOLTIP_NUMBER="Solicitar al usuario un número.",e.Msg.TEXT_PROMPT_TOOLTIP_TEXT="Solicitar al usuario un texto.",e.Msg.TEXT_PROMPT_TYPE_NUMBER="solicitar número con el mensaje",e.Msg.TEXT_PROMPT_TYPE_TEXT="solicitar texto con el mensaje",e.Msg.TEXT_REPLACE_HELPURL="https://github.com/google/blockly/wiki/Text#replacing-substrings",e.Msg.TEXT_REPLACE_MESSAGE0="reemplazar %1 con %2 en %3",e.Msg.TEXT_REPLACE_TOOLTIP="Reemplazar todas las veces que un texto dentro de otro texto.",e.Msg.TEXT_REVERSE_HELPURL="https://github.com/google/blockly/wiki/Text#reversing-text",e.Msg.TEXT_REVERSE_MESSAGE0="invertir %1",e.Msg.TEXT_REVERSE_TOOLTIP="Invierte el orden de los caracteres en el texto.",e.Msg.TEXT_TEXT_HELPURL="https://es.wikipedia.org/wiki/Cadena_de_caracteres",e.Msg.TEXT_TEXT_TOOLTIP="Una letra, palabra o línea de texto.",e.Msg.TEXT_TRIM_HELPURL="https://github.com/google/blockly/wiki/Text#trimming-removing-spaces",e.Msg.TEXT_TRIM_OPERATOR_BOTH="quitar espacios de ambos lados de",e.Msg.TEXT_TRIM_OPERATOR_LEFT="quitar espacios iniciales de",e.Msg.TEXT_TRIM_OPERATOR_RIGHT="quitar espacios finales de",e.Msg.TEXT_TRIM_TOOLTIP="Devuelve una copia del texto sin los espacios de uno o ambos extremos.",e.Msg.TODAY="Hoy",e.Msg.UNDO="Deshacer",e.Msg.UNNAMED_KEY="sin nombre",e.Msg.VARIABLES_DEFAULT_NAME="elemento",e.Msg.VARIABLES_GET_CREATE_SET="Crear 'establecer %1'",e.Msg.VARIABLES_GET_HELPURL="https://github.com/google/blockly/wiki/Variables#get",e.Msg.VARIABLES_GET_TOOLTIP="Devuelve el valor de esta variable.",e.Msg.VARIABLES_SET="establecer %1 a %2",e.Msg.VARIABLES_SET_CREATE_GET="Crear 'obtener %1'",e.Msg.VARIABLES_SET_HELPURL="https://github.com/google/blockly/wiki/Variables#set",e.Msg.VARIABLES_SET_TOOLTIP="Establece esta variable para que sea igual a la entrada.",e.Msg.VARIABLE_ALREADY_EXISTS="Ya existe una variable nombrada '%1'.",e.Msg.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE="Ya existe una variable nombrada '%1' para otra variable del tipo: '%2'.",e.Msg.VARIABLE_ALREADY_EXISTS_FOR_A_PARAMETER="Ya existe una variable denominada '%1' como parámetro en el procedimiento '%2'.",e.Msg.WORKSPACE_ARIA_LABEL="Espacio de trabajo de Blockly",e.Msg.WORKSPACE_COMMENT_DEFAULT_TEXT="Di algo…",e.Msg.CONTROLS_FOREACH_INPUT_DO=e.Msg.CONTROLS_REPEAT_INPUT_DO,e.Msg.CONTROLS_FOR_INPUT_DO=e.Msg.CONTROLS_REPEAT_INPUT_DO,e.Msg.CONTROLS_IF_ELSEIF_TITLE_ELSEIF=e.Msg.CONTROLS_IF_MSG_ELSEIF,e.Msg.CONTROLS_IF_ELSE_TITLE_ELSE=e.Msg.CONTROLS_IF_MSG_ELSE,e.Msg.CONTROLS_IF_IF_TITLE_IF=e.Msg.CONTROLS_IF_MSG_IF,e.Msg.CONTROLS_IF_MSG_THEN=e.Msg.CONTROLS_REPEAT_INPUT_DO,e.Msg.CONTROLS_WHILEUNTIL_INPUT_DO=e.Msg.CONTROLS_REPEAT_INPUT_DO,e.Msg.LISTS_CREATE_WITH_ITEM_TITLE=e.Msg.VARIABLES_DEFAULT_NAME,e.Msg.LISTS_GET_INDEX_HELPURL=e.Msg.LISTS_INDEX_OF_HELPURL,e.Msg.LISTS_GET_INDEX_INPUT_IN_LIST=e.Msg.LISTS_INLIST,e.Msg.LISTS_GET_SUBLIST_INPUT_IN_LIST=e.Msg.LISTS_INLIST,e.Msg.LISTS_INDEX_OF_INPUT_IN_LIST=e.Msg.LISTS_INLIST,e.Msg.LISTS_SET_INDEX_INPUT_IN_LIST=e.Msg.LISTS_INLIST,e.Msg.MATH_CHANGE_TITLE_ITEM=e.Msg.VARIABLES_DEFAULT_NAME,e.Msg.PROCEDURES_DEFRETURN_COMMENT=e.Msg.PROCEDURES_DEFNORETURN_COMMENT,e.Msg.PROCEDURES_DEFRETURN_DO=e.Msg.PROCEDURES_DEFNORETURN_DO,e.Msg.PROCEDURES_DEFRETURN_PROCEDURE=e.Msg.PROCEDURES_DEFNORETURN_PROCEDURE,e.Msg.PROCEDURES_DEFRETURN_TITLE=e.Msg.PROCEDURES_DEFNORETURN_TITLE,e.Msg.TEXT_APPEND_VARIABLE=e.Msg.VARIABLES_DEFAULT_NAME,e.Msg.TEXT_CREATE_JOIN_ITEM_TITLE_ITEM=e.Msg.VARIABLES_DEFAULT_NAME,e.Msg.MATH_HUE="230",e.Msg.LOOPS_HUE="120",e.Msg.LISTS_HUE="260",e.Msg.LOGIC_HUE="210",e.Msg.VARIABLES_HUE="330",e.Msg.TEXTS_HUE="160",e.Msg.PROCEDURES_HUE="290",e.Msg.COLOUR_HUE="20",e.Msg.VARIABLES_DYNAMIC_HUE="310",e.Msg})?_.apply(T,a):_)||(e.exports=s)}}]);