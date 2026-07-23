import React, { useState } from 'react';
import { CheckCircle2, XCircle, AlertCircle, Award, RotateCcw, ChevronRight } from 'lucide-react';

const questions = [
  {
    questionText: "¿Cuál es el objetivo principal del cifrado de datos en Excel, según el texto estudiado?",
    answerOptions: [
      { answerText: "Comprimir el tamaño del archivo para facilitar su envío por correo electrónico.", isCorrect: false },
      { answerText: "Garantizar la confidencialidad y la seguridad impidiendo el acceso a personas no autorizadas sin la clave.", isCorrect: true },
      { answerText: "Mejorar la velocidad de procesamiento de las fórmulas en hojas de cálculo complejas.", isCorrect: false },
      { answerText: "Permitir que múltiples usuarios editen el archivo simultáneamente en la nube sin restricciones.", isCorrect: false }
    ],
    explanation: "El texto indica que el objetivo principal es garantizar la confidencialidad y la seguridad, impidiendo que personas no autorizadas accedan a su contenido sin la contraseña adecuada."
  },
  {
    questionText: "Si una corporación busca salvaguardar sus secretos comerciales, propiedad intelectual e información estratégica, ¿qué categoría de protección de datos debe implementar obligatoriamente?",
    answerOptions: [
      { answerText: "Protección de datos de dispositivos móviles.", isCorrect: false },
      { answerText: "Protección de datos de tránsito.", isCorrect: false },
      { answerText: "Protección de datos de salud.", isCorrect: false },
      { answerText: "Protección de datos empresariales.", isCorrect: true }
    ],
    explanation: "La 'Protección de datos empresariales' implica salvaguardar activos digitales como secretos comerciales y propiedad intelectual mediante seguridad cibernética y gestión de accesos."
  },
  {
    questionText: "En el contexto de las herramientas de seguridad de Excel, ¿cuál es la diferencia fundamental entre el 'Cifrado de archivo' y el 'Cifrado de hoja de trabajo'?",
    answerOptions: [
      { answerText: "El cifrado de archivo usa firmas digitales, mientras que el de hoja de trabajo usa contraseñas.", isCorrect: false },
      { answerText: "El cifrado de archivo bloquea todo el documento, mientras que el de hoja permite proteger partes específicas, ideal para compartir.", isCorrect: true },
      { answerText: "El cifrado de hoja de trabajo requiere conexión a internet y el de archivo funciona sin conexión.", isCorrect: false },
      { answerText: "No existe diferencia práctica; son sinónimos utilizados en diferentes versiones de Microsoft Office.", isCorrect: false }
    ],
    explanation: "El cifrado de archivo protege el documento completo, mientras que el cifrado de hoja es útil cuando deseas proteger solo partes específicas de un archivo compartido."
  },
  {
    questionText: "Según las definiciones proporcionadas, ¿qué tecnología específica se menciona como un componente que puede requerir cifrado en la 'Protección de datos de tarjetas de identificación'?",
    answerOptions: [
      { answerText: "Tecnología Bluetooth de baja energía.", isCorrect: false },
      { answerText: "Códigos de Barras Bidimensionales (QR).", isCorrect: false },
      { answerText: "Tecnología de Identificación por Radiofrecuencia (RFID).", isCorrect: true },
      { answerText: "Bandas magnéticas de alta coercitividad.", isCorrect: false }
    ],
    explanation: "El texto especifica que la seguridad en tarjetas de identificación de empleados o de acceso puede implicar el cifrado de datos en tarjetas con tecnología (RFID)."
  },
  {
    questionText: "Un usuario necesita aplicar un cifrado con contraseña a todo su libro de Excel. ¿Cuál es la ruta exacta de pestañas y opciones que debe seguir según el manual?",
    answerOptions: [
      { answerText: "Pestaña Archivo -> Información -> Proteger libro -> Cifrar con contraseña.", isCorrect: true },
      { answerText: "Pestaña Inicio -> Celdas -> Formato -> Proteger libro -> Contraseña.", isCorrect: false },
      { answerText: "Pestaña Revisar -> Proteger -> Cifrar documento -> Aplicar clave.", isCorrect: false },
      { answerText: "Pestaña Datos -> Herramientas de datos -> Seguridad de archivo -> Cifrado.", isCorrect: false }
    ],
    explanation: "El Paso 1 y 2 del ejemplo práctico indican abrir el documento, ir a la pestaña 'Archivo', luego a 'Información', seleccionar 'Proteger libro' y elegir 'Cifrar con contraseña'."
  },
  {
    questionText: "¿Qué tres características fundamentales de la información en el mundo digital interconectado se han convertido en una preocupación primordial para individuos, empresas y gobiernos?",
    answerOptions: [
      { answerText: "Accesibilidad, gratuidad y transparencia.", isCorrect: false },
      { answerText: "Velocidad, capacidad de almacenamiento y portabilidad.", isCorrect: false },
      { answerText: "Integridad, confidencialidad y disponibilidad.", isCorrect: true },
      { answerText: "Exactitud, redundancia y compresión de datos.", isCorrect: false }
    ],
    explanation: "El primer párrafo del texto establece que 'proteger la integridad, confidencialidad y disponibilidad de los datos se ha convertido en una preocupación fundamental'."
  },
  {
    questionText: "¿Qué paso previo y crucial se debe realizar antes de aplicar 'Proteger hoja' si se desea que un rango de celdas específico continúe siendo editable por los usuarios?",
    answerOptions: [
      { answerText: "Aplicar una firma digital exclusivamente a las celdas que se desean mantener editables.", isCorrect: false },
      { answerText: "Ocultar las celdas usando la opción 'Ocultar' en el menú contextual antes de proteger.", isCorrect: false },
      { answerText: "Seleccionar el rango, ir a Formato de celdas, pestaña Proteger, y desmarcar la opción 'Bloqueada'.", isCorrect: true },
      { answerText: "Cambiar el color de fondo del rango a gris para indicar que es un área de edición permitida.", isCorrect: false }
    ],
    explanation: "El manual indica: 'previo a esto, debes haber elegido el rango de celdas que van a aparecer desbloqueadas... a través de Formato de celdas, pestaña Proteger y desmarcar la opción Bloqueada'."
  },
  {
    questionText: "En el ámbito de la 'Protección de datos de salud' en América Latina, ¿qué aspectos críticos abordan las leyes de protección descritas en el texto?",
    answerOptions: [
      { answerText: "La estandarización de costos de medicamentos y protocolos de tratamientos médicos.", isCorrect: false },
      { answerText: "El manejo del consentimiento informado, la confidencialidad y la transferencia internacional de datos.", isCorrect: true },
      { answerText: "La obligatoriedad de que los pacientes publiquen su historial médico en repositorios de la nube pública.", isCorrect: false },
      { answerText: "El uso exclusivo de software libre (open-source) en la red de hospitales públicos y privados.", isCorrect: false }
    ],
    explanation: "El texto detalla que se refiere al manejo del consentimiento informado, confidencialidad, y que las leyes en América Latina también abordan la transferencia internacional de datos de salud."
  },
  {
    questionText: "¿Qué tipo de cifrado en Excel se utiliza específicamente para verificar la autenticidad e integridad de un archivo, asegurando al receptor que el documento no ha sido alterado desde su creación?",
    answerOptions: [
      { answerText: "Protección de celdas y rangos.", isCorrect: false },
      { answerText: "Cifrado de archivo de 256 bits.", isCorrect: false },
      { answerText: "Autenticación de usuario por dominio.", isCorrect: false },
      { answerText: "Firmas digitales.", isCorrect: true }
    ],
    explanation: "Las 'Firmas digitales' se definen en el texto como 'una forma de verificar la autenticidad y la integridad de un archivo de Excel'."
  },
  {
    questionText: "La sección de 'Protección de datos financieros' exige medidas proactivas a las empresas. ¿Cuál de las siguientes acciones representa adecuadamente estas medidas según la lectura?",
    answerOptions: [
      { answerText: "Imprimir y archivar físicamente todas las transacciones para evitar el uso de servidores.", isCorrect: false },
      { answerText: "Implementar seguridad cibernética, capacitación de empleados y respuesta adecuada ante violaciones de datos.", isCorrect: true },
      { answerText: "Publicar de manera transparente los estados de cuenta anónimos de los clientes en su página web.", isCorrect: false },
      { answerText: "Contratar exclusivamente personal de seguridad física y eliminar las plataformas de banca online.", isCorrect: false }
    ],
    explanation: "Las empresas que manejan datos financieros deben tomar medidas proactivas como 'la implementación de medidas de seguridad cibernética, la capacitación de empleados en prácticas seguras y la respuesta adecuada en caso de una violación'."
  },
  {
    questionText: "Según la infografía de resumen, ¿cuál es la definición precisa del proceso de cifrado de datos?",
    answerOptions: [
      { answerText: "Un proceso que utiliza Redes Privadas Virtuales (VPN) para ocultar la dirección IP del usuario.", isCorrect: false },
      { answerText: "Transformar datos legibles en un formato ilegible mediante algoritmos matemáticos y una clave secreta.", isCorrect: true },
      { answerText: "El uso de filtros físicos de privacidad de pantalla y sistemas biométricos para bloquear el hardware.", isCorrect: false },
      { answerText: "La compresión de datos mediante lenguajes de programación para reducir el espacio de almacenamiento.", isCorrect: false }
    ],
    explanation: "El recuadro amarillo en la infografía define el cifrado como transformar datos legibles en formato ilegible mediante algoritmos matemáticos y una clave secreta."
  },
  {
    questionText: "Si una empresa configura un archivo de Excel para que solo se abra si el usuario inicia sesión validando sus credenciales de dominio de la organización, ¿qué tipo de protección está usando?",
    answerOptions: [
      { answerText: "Autenticación de usuario.", isCorrect: true },
      { answerText: "Cifrado de tránsito.", isCorrect: false },
      { answerText: "Cifrado de hoja de trabajo.", isCorrect: false },
      { answerText: "Firmas digitales.", isCorrect: false }
    ],
    explanation: "La 'Autenticación de usuario' implica requerir que los usuarios se autentiquen con sus cuentas de Microsoft o credenciales de dominio antes de abrir o editar un archivo."
  },
  {
    questionText: "Al intentar abrir nuevamente un libro de Excel que ha sido debidamente protegido y cifrado con contraseña, ¿qué acción ejecutará el programa inmediatamente?",
    answerOptions: [
      { answerText: "Mostrará el contenido en modo 'solo lectura' hasta que se ingrese la clave en el menú de opciones.", isCorrect: false },
      { answerText: "Enviará automáticamente un correo electrónico solicitando autorización al creador original del archivo.", isCorrect: false },
      { answerText: "Pedirá la clave de acceso a través de un cuadro de diálogo antes de permitir visualizar el contenido.", isCorrect: true },
      { answerText: "Abrirá el archivo normalmente pero deshabilitará la ejecución de todas las fórmulas matemáticas.", isCorrect: false }
    ],
    explanation: "El texto indica que 'Una vez que cerremos e intentemos abrir de nuevo el libro nos pedirá la clave de acceso'."
  },
  {
    questionText: "En la analogía introductoria del texto, ¿a qué elemento se compara la información personal del usuario en el mundo digital y cuál es la función de la protección de datos?",
    answerOptions: [
      { answerText: "Es como un libro abierto; la protección fomenta la transparencia pública.", isCorrect: false },
      { answerText: "Es como una moneda de cambio; la protección permite venderla de forma segura en internet.", isCorrect: false },
      { answerText: "Es como un tesoro; la protección actúa como un escudo o cerradura para evitar el acceso sin permiso.", isCorrect: true },
      { answerText: "Es como un peso muerto; la protección ayuda a comprimirla para que no ralentice los sistemas.", isCorrect: false }
    ],
    explanation: "El texto dice textualmente: 'Imagina que tu información personal es como un tesoro... la protección de datos es como un escudo o una cerradura que protege ese tesoro'."
  },
  {
    questionText: "Para bloquear rápidamente una hoja completa en Excel antes de aplicar protección, el usuario debe seleccionar todo. ¿Dónde se debe hacer clic exactamente para lograr esto de forma directa?",
    answerOptions: [
      { answerText: "En el cuadrado gris ubicado a la izquierda de la letra gris A, en la parte superior de la columna A.", isCorrect: true },
      { answerText: "En el nombre de la pestaña de la hoja ubicado en la parte inferior izquierda de la ventana.", isCorrect: false },
      { answerText: "Presionar el botón derecho del mouse en cualquier celda y elegir 'Seleccionar todo' en el menú contextual.", isCorrect: false },
      { answerText: "En la celda A1, manteniendo presionada la tecla Shift y haciendo clic en la última celda con datos.", isCorrect: false }
    ],
    explanation: "El texto instruye: 'se selecciona la hoja completa haciendo clic en el cuadrado gris a la izquierda de la letra gris A en la parte superior de la columna A'."
  },
  {
    questionText: "De acuerdo con el esquema general del texto, la 'Protección de datos' es un concepto amplio que involucra dos componentes principales, ¿cuáles son?",
    answerOptions: [
      { answerText: "Dispositivos de hardware y software antivirus.", isCorrect: false },
      { answerText: "Conjunto de medidas y regulaciones diseñadas para salvaguardar la privacidad y seguridad.", isCorrect: true },
      { answerText: "Estrategias de marketing y acuerdos de transferencia internacional.", isCorrect: false },
      { answerText: "Algoritmos matemáticos y claves secretas alfanuméricas.", isCorrect: false }
    ],
    explanation: "El recuadro verde en la infografía define la protección de datos como 'el conjunto de medidas y regulaciones diseñadas para salvaguardar la privacidad y seguridad...'."
  },
  {
    questionText: "¿Cuál de las siguientes situaciones describe un uso ideal para la 'Protección de celdas y rangos'?",
    answerOptions: [
      { answerText: "Cuando se necesita enviar el archivo a un cliente y se desea que no pueda abrir el documento de ninguna forma sin pagar.", isCorrect: false },
      { answerText: "Cuando se quiere garantizar que nadie más que el autor original pueda certificar que creó el documento.", isCorrect: false },
      { answerText: "Cuando se tiene una plantilla de cálculo y se desea que los usuarios solo puedan introducir datos en ciertas celdas, sin alterar las fórmulas del resto de la hoja.", isCorrect: true },
      { answerText: "Cuando se busca bloquear el acceso de la aplicación Excel en un dispositivo móvil si este es robado.", isCorrect: false }
    ],
    explanation: "La protección de celdas y rangos permite 'establecer contraseñas para permitir la edición solo a quienes conozcan la contraseña', siendo ideal para mantener partes bloqueadas (como fórmulas) y otras editables."
  },
  {
    questionText: "Analizando la infografía de 'Tipos de cifrado' (el pentágono de colores), ¿cuál de las siguientes opciones NO pertenece a las categorías de protección interna de un archivo de Excel, sino a la protección de la información en general?",
    answerOptions: [
      { answerText: "Hoja de trabajo.", isCorrect: false },
      { answerText: "Autenticación de usuario.", isCorrect: false },
      { answerText: "Basado en la nube.", isCorrect: true },
      { answerText: "Celdas y rangos.", isCorrect: false }
    ],
    explanation: "'Basado en la nube' aparece en el gráfico circular de 'Protección de datos' general, no en el pentágono específico de 'Tipos de cifrado' en Excel."
  },
  {
    questionText: "Al configurar una contraseña en la ventana 'Cifrar con contraseña', ¿cuál es la recomendación técnica explícita que da el material para asegurar su eficacia?",
    answerOptions: [
      { answerText: "Usar la misma clave del correo corporativo para evitar bloqueos accidentales por olvido.", isCorrect: false },
      { answerText: "Crear una clave de máximo 4 dígitos numéricos para agilizar el proceso de apertura diaria.", isCorrect: false },
      { answerText: "Escribir una contraseña que contenga letras mayúsculas, minúsculas y caracteres para que sea una clave fuerte.", isCorrect: true },
      { answerText: "Utilizar el número de documento de identificación del creador del archivo, ya que es único e intransferible.", isCorrect: false }
    ],
    explanation: "El paso 2 especifica: 'es recomendable que tenga letras mayúsculas, letras minúsculas, caracteres para que sea una clave fuerte'."
  },
  {
    questionText: "¿Por qué el texto menciona que al usar redes sociales o hacer compras en línea 'compartimos mucha información'? ¿Cuál es la implicación directa de esta acción para las organizaciones?",
    answerOptions: [
      { answerText: "Significa que deben venderla inmediatamente a terceros para generar ingresos publicitarios.", isCorrect: false },
      { answerText: "Implica que las empresas deben eliminar automáticamente cualquier rastro digital tras 24 horas.", isCorrect: false },
      { answerText: "Significa que las empresas que recopilan tu información deben cuidarla y usarla solo de la manera en que les permitas.", isCorrect: true },
      { answerText: "Implica que el usuario pierde automáticamente todos sus derechos de privacidad sobre esos datos.", isCorrect: false }
    ],
    explanation: "El texto afirma: 'La protección de datos significa que las empresas y organizaciones que recopilan tu información deben cuidarla y usarla solo de la manera en que les permitas'."
  }
];

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswerConfirmed, setIsAnswerConfirmed] = useState(false);

  const handleOptionClick = (index) => {
    if (!isAnswerConfirmed) {
      setSelectedAnswer(index);
    }
  };

  const handleConfirmAnswer = () => {
    if (selectedAnswer !== null && !isAnswerConfirmed) {
      setIsAnswerConfirmed(true);
      if (questions[currentQuestion].answerOptions[selectedAnswer].isCorrect) {
        setScore(score + 1);
      }
    }
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setIsAnswerConfirmed(false);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
    setIsAnswerConfirmed(false);
  };

  // Helper function to determine option styles
  const getOptionClass = (index, isCorrect) => {
    if (!isAnswerConfirmed) {
      return selectedAnswer === index
        ? 'border-blue-500 bg-blue-50 text-blue-800 ring-2 ring-blue-300'
        : 'border-gray-200 hover:border-blue-300 hover:bg-slate-50 text-gray-700';
    }

    if (isCorrect) {
      return 'border-green-500 bg-green-50 text-green-800 ring-2 ring-green-300 shadow-sm';
    }

    if (selectedAnswer === index && !isCorrect) {
      return 'border-red-500 bg-red-50 text-red-800 ring-2 ring-red-300 shadow-sm';
    }

    return 'border-gray-200 text-gray-400 opacity-60';
  };

  const progressPercentage = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4 font-sans text-slate-800">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-4xl overflow-hidden flex flex-col">
        
        {/* Header */}
        <div className="bg-blue-600 text-white p-6 md:p-8 flex items-center justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
              <Award className="w-8 h-8 text-blue-200" />
              Simulador de Test
            </h1>
            <p className="text-blue-100 mt-2 text-sm md:text-base">
              Módulo: Protección y Cifrado de Datos en Excel
            </p>
          </div>
          {!showScore && (
            <div className="text-right">
              <span className="text-3xl font-black text-white">{currentQuestion + 1}</span>
              <span className="text-blue-200 font-medium"> / {questions.length}</span>
            </div>
          )}
        </div>

        {/* Progress Bar */}
        {!showScore && (
          <div className="w-full bg-slate-200 h-1.5">
            <div 
              className="bg-blue-500 h-1.5 transition-all duration-300 ease-out"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        )}

        {/* Body Container */}
        <div className="p-6 md:p-8 flex-grow flex flex-col justify-center">
          
          {showScore ? (
            /* Results Screen */
            <div className="text-center py-8">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-blue-100 mb-6">
                <Award className="w-12 h-12 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold mb-2">¡Test Completado!</h2>
              <p className="text-gray-600 mb-6">Aquí están tus resultados sobre el material de estudio.</p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 max-w-md mx-auto mb-8 shadow-inner">
                <div className="text-6xl font-black text-blue-600 mb-2">
                  {score} <span className="text-3xl text-gray-400">/ {questions.length}</span>
                </div>
                <p className="font-semibold text-lg mt-4">
                  {score >= 18 ? "¡Excelente! Dominas el tema a la perfección. 🏆" :
                   score >= 14 ? "¡Muy buen trabajo! Tienes un buen entendimiento. 👏" :
                   score >= 10 ? "Aprobado, pero podrías repasar algunos conceptos. 📚" :
                   "Necesitas volver a leer el material con más atención. 💪"}
                </p>
                <div className="mt-4 text-sm text-gray-500">
                  Porcentaje de acierto: {Math.round((score / questions.length) * 100)}%
                </div>
              </div>

              <button 
                onClick={restartQuiz}
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-md active:scale-95"
              >
                <RotateCcw className="w-5 h-5" />
                Reiniciar Test
              </button>
            </div>
          ) : (
            /* Question Screen */
            <div className="flex flex-col h-full">
              <h2 className="text-xl md:text-2xl font-bold mb-6 text-slate-800 leading-snug">
                {questions[currentQuestion].questionText}
              </h2>

              <div className="flex flex-col gap-3 mb-8">
                {questions[currentQuestion].answerOptions.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleOptionClick(index)}
                    disabled={isAnswerConfirmed}
                    className={`text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-start gap-4 
                      ${getOptionClass(index, option.isCorrect)}`}
                  >
                    <div className="mt-0.5 flex-shrink-0">
                      {isAnswerConfirmed && option.isCorrect ? (
                        <CheckCircle2 className="w-6 h-6 text-green-500" />
                      ) : isAnswerConfirmed && selectedAnswer === index && !option.isCorrect ? (
                        <XCircle className="w-6 h-6 text-red-500" />
                      ) : (
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-bold
                          ${selectedAnswer === index ? 'border-blue-500 bg-blue-500 text-white' : 'border-gray-300 text-gray-400'}`}>
                          {String.fromCharCode(65 + index)}
                        </div>
                      )}
                    </div>
                    <span className="text-base md:text-lg font-medium leading-relaxed">
                      {option.answerText}
                    </span>
                  </button>
                ))}
              </div>

              {/* Feedback Area & Controls */}
              <div className="mt-auto border-t border-slate-200 pt-6">
                {!isAnswerConfirmed ? (
                  <div className="flex justify-end">
                    <button
                      onClick={handleConfirmAnswer}
                      disabled={selectedAnswer === null}
                      className={`px-6 py-3 rounded-lg font-bold transition-all shadow-sm
                        ${selectedAnswer !== null 
                          ? 'bg-blue-600 text-white hover:bg-blue-700 active:scale-95 cursor-pointer' 
                          : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
                    >
                      Confirmar Respuesta
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className={`flex items-start gap-3 p-4 rounded-lg flex-1
                      ${questions[currentQuestion].answerOptions[selectedAnswer].isCorrect 
                        ? 'bg-green-50 border border-green-200' 
                        : 'bg-red-50 border border-red-200'}`}>
                      {questions[currentQuestion].answerOptions[selectedAnswer].isCorrect ? (
                        <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                      ) : (
                        <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                      )}
                      <div>
                        <p className={`font-bold ${questions[currentQuestion].answerOptions[selectedAnswer].isCorrect ? 'text-green-800' : 'text-red-800'}`}>
                          {questions[currentQuestion].answerOptions[selectedAnswer].isCorrect ? '¡Correcto!' : 'Incorrecto'}
                        </p>
                        <p className="text-sm mt-1 text-slate-700 font-medium">
                          <span className="font-bold underline mb-1 block text-slate-800">Explicación:</span>
                          {questions[currentQuestion].explanation}
                        </p>
                      </div>
                    </div>
                    
                    <button
                      onClick={handleNextQuestion}
                      className="w-full md:w-auto px-6 py-3 bg-slate-800 text-white font-bold rounded-lg hover:bg-slate-900 transition-colors shadow-md flex items-center justify-center gap-2 flex-shrink-0 active:scale-95"
                    >
                      {currentQuestion + 1 === questions.length ? 'Ver Resultados' : 'Siguiente Pregunta'}
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                )}
              </div>
              
            </div>
          )}
        </div>
      </div>
    </div>
  );
}