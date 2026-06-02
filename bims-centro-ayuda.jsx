import { useState } from "react";

const articles = [
  {
    id: "crear-cuenta",
    title: "Cómo crear tu cuenta en BIMS",
    category: "Primeros pasos",
    readTime: "2 min",
    content: [
      {
        type: "intro",
        text: "Para empezar a usar BIMS necesitás crear una cuenta. El proceso tarda menos de 5 minutos y solo necesitás un email y el RUC de tu empresa."
      },
      {
        type: "steps",
        title: "Pasos para crear tu cuenta",
        items: [
          {
            step: 1,
            title: "Ingresá a bims.com.py y hacé clic en Crear cuenta",
            detail: "Vas a ver un formulario donde te pedimos tu nombre, apellido, email y contraseña."
          },
          {
            step: 2,
            title: "Completá tus datos personales",
            detail: "Ingresá tu nombre completo y un email al que tengas acceso. Este email va a ser tu usuario para entrar a BIMS."
          },
          {
            step: 3,
            title: "Elegí una contraseña segura",
            detail: "Tiene que tener al menos 8 caracteres. Te recomendamos combinar letras, números y símbolos."
          },
          {
            step: 4,
            title: "Hacé clic en Crear cuenta",
            detail: "Te vamos a enviar un email de confirmación a la dirección que ingresaste."
          }
        ]
      },
      {
        type: "callout",
        variant: "info",
        title: "¿No te llegó el email de confirmación?",
        items: [
          "Revisá tu carpeta de spam o correo no deseado.",
          "Si usás Gmail, buscá en las pestañas \"Promociones\" o \"Actualizaciones\".",
          "El email llega desde noreply@bims.com.py en los próximos 2 minutos.",
          "Si pasaron más de 5 minutos, podés reenviar el email desde la pantalla de confirmación."
        ]
      },
      {
        type: "faq",
        title: "Preguntas frecuentes",
        items: [
          {
            q: "¿Puedo usar el mismo email para más de una empresa?",
            a: "No. Cada cuenta de BIMS necesita un email único. Si manejás varias empresas, vas a necesitar un email diferente para cada una."
          },
          {
            q: "¿Qué pasa si me equivoco con el email?",
            a: "Si el email es incorrecto, no vas a poder verificar tu cuenta. En ese caso, contactá a soporte desde el chat para que te ayudemos a corregirlo."
          }
        ]
      }
    ]
  },
  {
    id: "verificar-email",
    title: "Cómo verificar tu email",
    category: "Primeros pasos",
    readTime: "1 min",
    content: [
      {
        type: "intro",
        text: "Después de crear tu cuenta, necesitás confirmar tu email para activarla. Este paso es obligatorio: sin la verificación, no vas a poder continuar con la configuración."
      },
      {
        type: "steps",
        title: "Cómo confirmar tu email",
        items: [
          {
            step: 1,
            title: "Abrí el email que te enviamos",
            detail: "Buscá un email con el asunto \"Confirmá tu cuenta en BIMS\" enviado desde noreply@bims.com.py."
          },
          {
            step: 2,
            title: "Hacé clic en \"Confirmar mi cuenta\"",
            detail: "El botón te va a redirigir de vuelta a BIMS y tu cuenta va a quedar activa automáticamente."
          },
          {
            step: 3,
            title: "Continuá con la configuración",
            detail: "Una vez confirmado el email, podés seguir con el resto del onboarding: cargar el RUC, medios de pago y timbrado."
          }
        ]
      },
      {
        type: "callout",
        variant: "warning",
        title: "El link de verificación vence a las 24 horas",
        text: "Si no confirmás tu email dentro de las 24 horas, el link va a dejar de funcionar. Podés solicitar uno nuevo desde la pantalla de confirmación haciendo clic en \"Reenviar email\"."
      },
      {
        type: "faq",
        title: "Preguntas frecuentes",
        items: [
          {
            q: "Hice clic en el link pero me dice que es inválido",
            a: "Probablemente el link venció o ya fue usado. Pedí un nuevo email de verificación desde la pantalla de inicio de sesión, opción \"Reenviar confirmación\"."
          },
          {
            q: "¿Puedo cambiar mi email después de verificarlo?",
            a: "Sí. Una vez que estés dentro de BIMS, podés cambiarlo desde Configuración → Mi cuenta. Vas a tener que verificar el nuevo email también."
          }
        ]
      }
    ]
  },
  {
    id: "ingresar-ruc",
    title: "Cómo ingresar el RUC de tu empresa",
    category: "Configuración inicial",
    readTime: "2 min",
    content: [
      {
        type: "intro",
        text: "El RUC es el número que identifica a tu empresa ante la DNIT. BIMS lo necesita para validar tus datos y asegurarse de que podés emitir facturas con validez legal."
      },
      {
        type: "steps",
        title: "Pasos para ingresar el RUC",
        items: [
          {
            step: 1,
            title: "Ingresá el RUC en el campo de búsqueda",
            detail: "Escribilo sin guión y con el dígito verificador. Ejemplo: 800123456789"
          },
          {
            step: 2,
            title: "Hacé clic en Buscar",
            detail: "BIMS consulta automáticamente la base de datos de la DNIT y trae los datos de tu empresa."
          },
          {
            step: 3,
            title: "Revisá los datos que aparecen",
            detail: "Vas a ver el nombre de tu empresa y la razón social. Si todo está bien, hacé clic en Continuar."
          }
        ]
      },
      {
        type: "callout",
        variant: "info",
        title: "¿Dónde encontrás tu RUC?",
        items: [
          "En una factura emitida o recibida por tu empresa.",
          "En tu constancia de inscripción de la DNIT.",
          "En el Sistema Marangatu, ingresando con tu cédula y contraseña."
        ]
      },
      {
        type: "callout",
        variant: "warning",
        title: "El RUC tiene que estar habilitado en la DNIT",
        text: "Si tu RUC no aparece o figura como inactivo, necesitás regularizar la situación directamente ante la DNIT antes de continuar. BIMS no puede completar el registro con un RUC inhabilitado."
      },
      {
        type: "faq",
        title: "Preguntas frecuentes",
        items: [
          {
            q: "¿Qué es el dígito verificador?",
            a: "Es el último número del RUC, separado por un guión en los documentos oficiales. Por ejemplo, si tu RUC es 80012345-6, el número completo a ingresar es 800123456."
          },
          {
            q: "El sistema dice que mi RUC no es válido pero yo sé que existe",
            a: "Asegurate de escribirlo sin guiones y sin espacios. Si el problema persiste, verificá que tu RUC esté activo en el Sistema Marangatu o contactá a soporte."
          },
          {
            q: "¿Puedo cambiar el RUC después de registrarme?",
            a: "No. El RUC queda vinculado a tu cuenta de forma permanente. Si necesitás cambiar el RUC, tenés que crear una nueva cuenta."
          }
        ]
      }
    ]
  },
  {
    id: "medios-de-pago",
    title: "Cómo configurar tus medios de pago y cuentas fondo",
    category: "Configuración inicial",
    readTime: "3 min",
    content: [
      {
        type: "intro",
        text: "Los medios de pago le dicen a BIMS cómo recibís el dinero de tus clientes. Por cada medio que habilitás, BIMS crea automáticamente una cuenta fondo donde registra los movimientos."
      },
      {
        type: "steps",
        title: "Pasos para configurar tus medios de pago",
        items: [
          {
            step: 1,
            title: "Seleccioná los medios de pago que usás",
            detail: "Podés elegir uno o más: Efectivo, Transferencia y Tarjetas. Podés agregar más después desde Configuración."
          },
          {
            step: 2,
            title: "Revisá las cuentas fondo asignadas",
            detail: "Cada medio tiene una cuenta fondo predeterminada. Por ejemplo, Efectivo usa \"Caja principal\" y Transferencia usa \"Banco principal\". Podés cambiar estos nombres después."
          },
          {
            step: 3,
            title: "Hacé clic en Continuar",
            detail: "Con al menos un medio de pago seleccionado ya podés avanzar."
          }
        ]
      },
      {
        type: "explainer",
        title: "¿Qué es una cuenta fondo?",
        text: "Una cuenta fondo es el registro interno donde BIMS anota el dinero que entra y sale según el medio de pago. No es una cuenta bancaria real: es una forma de organizar tus cobros dentro del sistema. Por ejemplo, todo lo que cobrás en efectivo queda registrado en \"Caja principal\", y todo lo que cobrás por transferencia en \"Banco principal\"."
      },
      {
        type: "faq",
        title: "Preguntas frecuentes",
        items: [
          {
            q: "¿Puedo cambiar los nombres de las cuentas fondo?",
            a: "Sí. Podés editarlos en cualquier momento desde Configuración → Cuentas fondo."
          },
          {
            q: "¿Qué pasa si después quiero agregar un medio de pago que no seleccioné acá?",
            a: "Podés agregar medios de pago en cualquier momento desde Configuración → Medios de cobro. No necesitás repetir el onboarding."
          },
          {
            q: "¿Es obligatorio configurar los medios de pago en este paso?",
            a: "Podés omitir este paso y completarlo después. Pero tené en cuenta que sin al menos un medio de pago configurado, no vas a poder registrar ventas."
          }
        ]
      }
    ]
  },
  {
    id: "timbrado",
    title: "Cómo cargar tu habilitación de timbrado",
    category: "Configuración inicial",
    readTime: "3 min",
    content: [
      {
        type: "intro",
        text: "El timbrado es el código que la DNIT le asigna a tu empresa para autorizar la emisión de facturas con validez legal. Sin él, podés usar BIMS pero no vas a poder emitir facturas."
      },
      {
        type: "steps",
        title: "Pasos para cargar el timbrado",
        items: [
          {
            step: 1,
            title: "Descargá tu habilitación de timbrado desde el Sistema Marangatu",
            detail: "Ingresá a marangatu.set.gov.py con tu cédula y contraseña. Buscá la sección de timbrado y descargá el documento en PDF."
          },
          {
            step: 2,
            title: "Subí el archivo en BIMS",
            detail: "Hacé clic en \"Seleccionar archivo\" o arrastrá el PDF directamente al área de carga. El archivo tiene que estar en formato PDF y pesar menos de 10 MB."
          },
          {
            step: 3,
            title: "BIMS lee los datos automáticamente",
            detail: "Vamos a extraer el número de timbrado y la fecha de vencimiento del documento. Solo necesitás revisar que los datos sean correctos."
          },
          {
            step: 4,
            title: "Confirmá y continuá",
            detail: "Si los datos están bien, hacé clic en Continuar. Si algo no coincide, podés corregirlo manualmente antes de guardar."
          }
        ]
      },
      {
        type: "callout",
        variant: "info",
        title: "¿Qué es el timbrado?",
        text: "Es un código de 8 dígitos que la DNIT asigna a tu empresa para autorizar la emisión de facturas. Tiene una fecha de vencimiento y necesitás renovarlo periódicamente. BIMS te avisa cuando está próximo a vencer."
      },
      {
        type: "callout",
        variant: "warning",
        title: "Podés cargar el timbrado después",
        text: "Si todavía no tenés el documento o preferís hacerlo más tarde, hacé clic en \"Cargar más tarde\". Pero recordá: no vas a poder emitir facturas hasta que el timbrado esté cargado y validado."
      },
      {
        type: "faq",
        title: "Preguntas frecuentes",
        items: [
          {
            q: "El sistema no pudo leer los datos de mi PDF",
            a: "Puede pasar si el PDF es una imagen escaneada con baja calidad. En ese caso, podés ingresar el número de timbrado y la fecha de vencimiento de forma manual."
          },
          {
            q: "¿Qué pasa cuando mi timbrado vence?",
            a: "BIMS te va a notificar con anticipación para que lo renueves en Marangatu y actualices el documento en Configuración → Timbrado."
          },
          {
            q: "¿Puedo tener más de un timbrado cargado?",
            a: "Sí. Algunas empresas operan con más de un punto de emisión. Podés gestionar todos tus timbrados desde Configuración → Timbrado."
          }
        ]
      }
    ]
  },
  {
    id: "productos",
    title: "Cómo cargar tus productos o servicios",
    category: "Configuración inicial",
    readTime: "2 min",
    content: [
      {
        type: "intro",
        text: "Cargá los productos o servicios que vendés para poder facturarlos rápido desde la pantalla de ventas. No es obligatorio en el onboarding: podés agregarlos en cualquier momento."
      },
      {
        type: "steps",
        title: "Pasos para cargar un producto",
        items: [
          {
            step: 1,
            title: "Hacé clic en Agregar producto",
            detail: "Vas a ver un formulario donde podés completar los datos del producto."
          },
          {
            step: 2,
            title: "Completá los datos del producto",
            detail: "Nombre, precio unitario y si aplica IVA. El código y la descripción son opcionales pero te van a ayudar a identificarlos más fácil."
          },
          {
            step: 3,
            title: "Guardá y agregá más si necesitás",
            detail: "Podés cargar tantos productos como quieras. También podés importarlos en lote desde un archivo Excel desde Configuración → Productos."
          }
        ]
      },
      {
        type: "callout",
        variant: "info",
        title: "También podés agregar productos al momento de facturar",
        text: "Si preferís no cargarlos todos ahora, podés crear productos nuevos directamente desde la pantalla de nueva venta. Se van a guardar para usarlos en el futuro."
      },
      {
        type: "placeholder",
        text: "📌 Próximamente: capturas del formulario de carga de productos."
      }
    ]
  },
  {
    id: "usuarios",
    title: "Cómo agregar usuarios a tu empresa",
    category: "Configuración inicial",
    readTime: "2 min",
    content: [
      {
        type: "intro",
        text: "Podés invitar a otros miembros de tu equipo para que usen BIMS con su propio acceso. Cada usuario tiene un rol que define qué puede ver y hacer dentro del sistema."
      },
      {
        type: "steps",
        title: "Pasos para agregar un usuario",
        items: [
          {
            step: 1,
            title: "Ingresá el email de la persona que querés invitar",
            detail: "Tiene que ser un email válido. La persona va a recibir una invitación para crear su contraseña."
          },
          {
            step: 2,
            title: "Seleccioná el rol que le corresponde",
            detail: "Cada rol tiene distintos permisos. Te recomendamos asignar el rol más restrictivo que cubra las necesidades de esa persona."
          },
          {
            step: 3,
            title: "Enviá la invitación",
            detail: "La persona va a recibir un email para activar su acceso. Una vez que lo acepte, va a aparecer en tu lista de usuarios."
          }
        ]
      },
      {
        type: "placeholder",
        text: "📌 Próximamente: descripción detallada de roles y permisos, y capturas del formulario de invitación."
      }
    ]
  },
  {
    id: "plan",
    title: "Dónde ver los detalles de tu plan",
    category: "Cuenta y facturación",
    readTime: "1 min",
    content: [
      {
        type: "intro",
        text: "Podés consultar en cualquier momento qué plan tenés activo, cuándo vence y qué funciones incluye."
      },
      {
        type: "steps",
        title: "Cómo acceder al detalle de tu plan",
        items: [
          {
            step: 1,
            title: "Hacé clic en tu nombre o logo de empresa (esquina superior derecha)",
            detail: "Se despliega el menú de cuenta."
          },
          {
            step: 2,
            title: "Seleccioná Configuración",
            detail: "Entrás a la sección de configuración general de tu cuenta."
          },
          {
            step: 3,
            title: "Ingresá a la pestaña Plan y facturación",
            detail: "Ahí vas a ver el nombre de tu plan, la fecha de renovación, el monto y el historial de pagos."
          }
        ]
      },
      {
        type: "callout",
        variant: "info",
        title: "¿Querés cambiar de plan?",
        text: "Desde la misma sección podés ver los planes disponibles y upgradear o downgradear según tus necesidades. Los cambios aplican al inicio del siguiente período de facturación."
      },
      {
        type: "placeholder",
        text: "📌 Próximamente: capturas de la pantalla de plan y facturación."
      }
    ]
  }
];

const categoryOrder = ["Primeros pasos", "Configuración inicial", "Cuenta y facturación"];

function CalloutBox({ variant, title, text, items }) {
  const styles = {
    info: { bg: "#EFF6FF", border: "#BFDBFE", icon: "ℹ️", titleColor: "#1D4ED8" },
    warning: { bg: "#FFFBEB", border: "#FDE68A", icon: "⚠️", titleColor: "#92400E" }
  };
  const s = styles[variant];
  return (
    <div style={{ background: s.bg, border: `1px solid ${s.border}`, borderRadius: 8, padding: "14px 16px", marginBottom: 20 }}>
      <div style={{ fontWeight: 600, fontSize: 14, color: s.titleColor, marginBottom: items || text ? 8 : 0 }}>
        {s.icon} {title}
      </div>
      {text && <p style={{ margin: 0, fontSize: 14, color: "#374151", lineHeight: 1.6 }}>{text}</p>}
      {items && (
        <ul style={{ margin: 0, paddingLeft: 20 }}>
          {items.map((item, i) => (
            <li key={i} style={{ fontSize: 14, color: "#374151", lineHeight: 1.7 }}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

function StepList({ items }) {
  return (
    <div style={{ marginBottom: 24 }}>
      {items.map((item) => (
        <div key={item.step} style={{ display: "flex", gap: 16, marginBottom: 20 }}>
          <div style={{
            minWidth: 28, height: 28, borderRadius: "50%",
            background: "#2563EB", color: "#fff",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 13, fontWeight: 700, marginTop: 1
          }}>
            {item.step}
          </div>
          <div>
            <div style={{ fontWeight: 600, fontSize: 15, color: "#111827", marginBottom: 4 }}>{item.title}</div>
            <div style={{ fontSize: 14, color: "#6B7280", lineHeight: 1.6 }}>{item.detail}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function FaqList({ items }) {
  const [open, setOpen] = useState(null);
  return (
    <div style={{ marginBottom: 24 }}>
      <div style={{ fontWeight: 700, fontSize: 16, color: "#111827", marginBottom: 12 }}>Preguntas frecuentes</div>
      {items.map((item, i) => (
        <div key={i} style={{ borderBottom: "1px solid #E5E7EB" }}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            style={{
              width: "100%", textAlign: "left", padding: "12px 0",
              background: "none", border: "none", cursor: "pointer",
              display: "flex", justifyContent: "space-between", alignItems: "center",
              fontSize: 14, fontWeight: 600, color: "#111827"
            }}
          >
            {item.q}
            <span style={{ color: "#9CA3AF", fontSize: 18, fontWeight: 300 }}>{open === i ? "−" : "+"}</span>
          </button>
          {open === i && (
            <div style={{ fontSize: 14, color: "#6B7280", lineHeight: 1.7, paddingBottom: 14 }}>
              {item.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function Article({ article }) {
  return (
    <div>
      <div style={{ fontSize: 12, color: "#9CA3AF", marginBottom: 8 }}>
        {article.category} · {article.readTime} de lectura
      </div>
      <h1 style={{ fontSize: 24, fontWeight: 700, color: "#111827", marginBottom: 20, lineHeight: 1.3 }}>
        {article.title}
      </h1>
      {article.content.map((block, i) => {
        if (block.type === "intro") return (
          <p key={i} style={{ fontSize: 15, color: "#374151", lineHeight: 1.7, marginBottom: 24, borderLeft: "3px solid #2563EB", paddingLeft: 14 }}>
            {block.text}
          </p>
        );
        if (block.type === "steps") return (
          <div key={i}>
            <div style={{ fontWeight: 700, fontSize: 16, color: "#111827", marginBottom: 16 }}>{block.title}</div>
            <StepList items={block.items} />
          </div>
        );
        if (block.type === "callout") return <CalloutBox key={i} {...block} />;
        if (block.type === "explainer") return (
          <div key={i} style={{ background: "#F9FAFB", border: "1px solid #E5E7EB", borderRadius: 8, padding: "14px 16px", marginBottom: 20 }}>
            <div style={{ fontWeight: 600, fontSize: 14, color: "#374151", marginBottom: 8 }}>📖 {block.title}</div>
            <p style={{ margin: 0, fontSize: 14, color: "#6B7280", lineHeight: 1.6 }}>{block.text}</p>
          </div>
        );
        if (block.type === "faq") return <FaqList key={i} items={block.items} />;
        if (block.type === "placeholder") return (
          <div key={i} style={{ background: "#F3F4F6", borderRadius: 8, padding: "12px 16px", marginBottom: 20, fontSize: 13, color: "#9CA3AF", fontStyle: "italic" }}>
            {block.text}
          </div>
        );
        return null;
      })}
    </div>
  );
}

export default function App() {
  const [activeId, setActiveId] = useState("crear-cuenta");
  const activeArticle = articles.find(a => a.id === activeId);
  const grouped = categoryOrder.map(cat => ({
    cat,
    items: articles.filter(a => a.category === cat)
  }));

  return (
    <div style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", display: "flex", height: "100vh", background: "#fff" }}>
      {/* Sidebar */}
      <div style={{ width: 260, borderRight: "1px solid #E5E7EB", padding: "24px 0", overflowY: "auto", background: "#FAFAFA", flexShrink: 0 }}>
        <div style={{ padding: "0 20px 20px", borderBottom: "1px solid #E5E7EB", marginBottom: 8 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
            <div style={{ width: 28, height: 28, background: "#2563EB", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: "#fff", fontSize: 14, fontWeight: 700 }}>B</span>
            </div>
            <span style={{ fontWeight: 700, fontSize: 15, color: "#111827" }}>BIMS</span>
          </div>
          <div style={{ fontSize: 12, color: "#9CA3AF" }}>Centro de ayuda</div>
        </div>

        {grouped.map(({ cat, items }) => (
          <div key={cat} style={{ marginBottom: 8 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.08em", padding: "12px 20px 6px" }}>
              {cat}
            </div>
            {items.map(a => (
              <button
                key={a.id}
                onClick={() => setActiveId(a.id)}
                style={{
                  width: "100%", textAlign: "left", padding: "8px 20px",
                  background: activeId === a.id ? "#EFF6FF" : "none",
                  border: "none", cursor: "pointer",
                  fontSize: 13.5,
                  color: activeId === a.id ? "#1D4ED8" : "#374151",
                  fontWeight: activeId === a.id ? 600 : 400,
                  borderLeft: activeId === a.id ? "2px solid #2563EB" : "2px solid transparent",
                  lineHeight: 1.4
                }}
              >
                {a.title}
              </button>
            ))}
          </div>
        ))}
      </div>

      {/* Content */}
      <div style={{ flex: 1, overflowY: "auto", padding: "40px 48px", maxWidth: 720 }}>
        {activeArticle && <Article article={activeArticle} />}
      </div>
    </div>
  );
}
