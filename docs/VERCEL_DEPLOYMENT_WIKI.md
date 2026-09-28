# 📘 Wiki: Guía de Despliegue en Vercel y GitHub (sideweb)

Esta guía documenta la sincronización entre **GitHub** y **Vercel**, las restricciones del plan **Hobby (Gratis)**, la resolución de conflictos de autoría y los comandos de emergencia para despliegues manuales.

---

## 1. El Concepto Clave: ¿Cómo se comunican GitHub y Vercel?

```
[Mac Local] --(git push)--> [GitHub] --(Webhook)--> [Vercel] --(Build)--> [Producción]
```

1. **Git Local:** Firma el commit con tu `user.name` y `user.email`.
2. **GitHub:** Busca en su base de datos si ese `user.email` pertenece a tu cuenta (`JosePizarro1`). Si no está registrado en esa cuenta, el commit se marca como autor **desconocido**.
3. **Vercel:** Recibe la orden de construir. Compara el autor del commit contra los miembros de tu cuenta de Vercel.
   - Si el autor no coincide con el dueño de la cuenta de Vercel y el repo es privado, Vercel **cancela el deploy** asumiendo que un colaborador no autorizado está intentando desplegar en un plan gratuito.

---

## 2. Los 3 Gotchas Principales de Vercel Hobby

### A. Repositorio Privado + Colaboradores Externos
En el plan Hobby, Vercel **no permite** que personas ajenas a la cuenta desplieguen repositorios privados. Si tu cuenta de GitHub no coincide con la cuenta de Vercel conectada, el deploy se bloquea.

**Solución:**
- Hacer el repositorio **Público** (Settings > General > Danger Zone > Change visibility), O
- Vincular la cuenta correcta de GitHub en Vercel.

### B. "Los equipos de aficionados no admiten colaboración" (Hobby Teams)
En Vercel existen dos tipos de cuentas:
1. **Cuentas Personales (Personal Account):** Totalmente gratis, despliegues ilimitados, sin advertencias.
2. **Teams (Equipos):** Diseñados para empresas. Si un Team no paga el plan Pro ($20/mes por usuario), Vercel bloquea prácticamente cualquier acción de despliegue conjunto.

**Regla de oro:** Siempre despliega tus proyectos personales bajo tu **Personal Account** de Vercel, nunca dentro de un "Team".

### C. El falso "404 Not Found" en GitHub
Cuando un repositorio es **PRIVADO** en GitHub:
- Si entras sin haber iniciado sesión (`Sign in`), o
- Si entras con otra cuenta secundaria que no tiene permisos de colaborador,
GitHub **devuelve un error 404 intencionalmente**. No muestra "403 Forbidden" para no revelar a terceros que el proyecto existe.

---

## 3. Configuración de Identidad en Git Local

Para que GitHub siempre reconozca tus commits con tu avatar y usuario oficial:

```bash
# Verificar la identidad actual
git config user.name
git config user.email

# Establecer la identidad correcta para este repositorio
git config user.name "JosePizarro1"
git config user.email "jose.pizarro@tannua.com"
```

> **Alias privado oficial de GitHub (alternativa segura):**
> ```bash
> git config user.email "116003190+JosePizarro1@users.noreply.github.com"
> ```

### Cómo corregir el autor del último commit:
```bash
git commit --amend --reset-author --no-edit
git push --force
```

---

## 4. Cómo Conectar o Cambiar GitHub dentro de Vercel

Si tu cuenta de Vercel está enlazada al usuario de GitHub equivocado:

1. Entra a: [vercel.com/account/settings/authentication](https://vercel.com/account/settings/authentication)
2. En la sección **Connected Accounts** > **GitHub**, haz clic en **Disconnect**.
3. Haz clic en **Connect** e inicia sesión con la cuenta correcta (**`JosePizarro1`**).
4. Para importar el proyecto limpio en tu cuenta personal: [vercel.com/new](https://vercel.com/new).

---

## 5. Despliegue Manual Directo (Saltarse GitHub)

El CLI de Vercel te permite compilar y subir los archivos directamente desde tu Mac hacia los servidores de Vercel sin depender de webhooks ni permisos de GitHub.

### Paso 1: Limpiar caché si npm da error `ENOTEMPTY`
```bash
rm -rf ~/.npm/_npx/*
```

### Paso 2: Desplegar a Producción
```bash
npx vercel --prod
```
- La primera vez te abrirá una pestaña en el navegador para autorizar tu cuenta.
- Compilará tu proyecto Astro localmente o en la nube y te devolverá la URL pública lista.

---

## 6. Matriz Rápida de Diagnóstico

| Síntoma / Mensaje | Causa Raíz | Solución Rápida |
| :--- | :--- | :--- |
| `[email] attempted to deploy... but they're not a member of the team` | El autor del commit en Git no coincide con la cuenta dueña de Vercel en un repo privado. | Desconectar y reconectar GitHub en Vercel, o hacer el repo público en GitHub. |
| `Los equipos de aficionados no admiten la colaboración` | El proyecto en Vercel fue creado dentro de un "Team" gratuito en vez de tu cuenta personal. | Transferir el proyecto a tu **Personal Account** en Settings de Vercel. |
| `Commit email could not be matched to a GitHub account` | El correo de `git config user.email` no está verificado en tu cuenta de GitHub. | Agregar el correo en `github.com/settings/emails` o cambiar el email local a tu alias noreply. |
| GitHub muestra `404 Not Found` en la URL del repositorio | No has iniciado sesión en el navegador (`Sign in`) o estás con otra cuenta ajena al repo privado. | Iniciar sesión en GitHub con la cuenta dueña (`JosePizarro1`). |
| `npm error ENOTEMPTY: directory not empty` | npx se interrumpió a mitad de una descarga anterior dejando archivos residuales bloqueados. | Correr `rm -rf ~/.npm/_npx/*` y volver a intentar. |
