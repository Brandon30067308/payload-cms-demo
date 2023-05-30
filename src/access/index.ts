import { Access } from "payload/config"
import { FieldAccess } from "payload/types"

export const isAdmin: Access = function ({ req: { user } }) {
  return user?.roles?.includes("admin")
}

export const isAdminOrSelf: Access = function ({ req: { user } }) {
  if (user) {
    if (user.roles?.includes("admin")) {
      return true
    }

    return {
      id: {
        equals: user.id,
      },
    }
  }

  return true
}

export const isAdminOrEditor: Access = function ({ req: { user } }) {
  if (user) {
    if (user.roles?.includes("admin") || user.roles?.includes("editor")) {
      return true
    }

    return false
  }

  return true
}

export const isAdminOrPostAuthor: Access = function ({ req: { user } }) {
  if (user) {
    if (user.roles?.includes("admin")) {
      return true
    }

    return {
      author: {
        equals: user.id,
      },
    }
  }

  return false
}

export const isAdminOrAuthor: Access = function ({ req: { user } }) {
  if (user) {
    if (user.roles?.includes("admin")) {
      return true
    }

    return {
      author: {
        equals: user.id,
      },
    }
  }

  return false
}

export const isOnlyAdminOrEditor: Access = function ({ req: { user } }) {
  if (
    user &&
    (user.roles?.includes("admin") || user.roles?.includes("editor"))
  ) {
    return true
  }

  return false
}

export const isAdminOrEditorOrPagePublished: Access = function ({
  req: { user },
}) {
  if (user) {
    if (user.roles?.includes("admin") || user.roles?.includes("editor")) {
      return true
    }

    return false
  }

  return {
    published: {
      equals: true,
    },
  }
}

export const isAdminOrEditorOrPublished: Access = function ({ req: { user } }) {
  if (user) {
    if (user.roles?.includes("admin") || user.roles?.includes("editor")) {
      return true
    }

    return false
  }

  return {
    status: {
      equals: "published",
    },
  }
}

export const isAdminOrEditorOrNotArchived: Access = function ({
  req: { user },
}) {
  if (user) {
    if (user.roles?.includes("admin") || user.roles?.includes("editor")) {
      return true
    }

    return false
  }

  return {
    archived: {
      equals: false,
    },
  }
}

export const isAdminFieldLevel: FieldAccess = function ({ req: { user } }) {
  return !!user?.roles?.includes("admin")
}

export const isAdminOrEditorFieldLevel: FieldAccess = function ({
  req: { user },
}) {
  if (user) {
    if (user.roles?.includes("admin")) {
      return true
    }

    return false
  }

  return true
}
