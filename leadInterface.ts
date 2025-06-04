export interface Lead {
  // Encabezado
  nombreLead: string; // Nombre del lead: Programa + modalidad + marca
  gestionManual: boolean; // Gestión Manual: si activo no entra en reglas automáticas
  // Widget Llamadas se maneja externamente

  // Datos de usuario
  contactoId?: string; // Lookup a Contacto (opcional)
  nombre: string; // Nombre de pila
  apellidos: string; // Apellidos
  direccion: string; // País + ciudad
  correoElectronico: string; // Email
  movil: string; // Móvil
  telefono: string; // Teléfono alternativo

  // Comercial
  comercialId: string; // Asesor asignado
  equipoVentasId?: string; // Equipo de ventas
  unidadOperacion: string; // Unidad de operación
  estado: string; // Nuevo, Contactado, etc.
  calificacion: number; // 0-100
  prioridad: number; // 0-5
  etiquetas: string[]; // Etiquetas o Tags

  // Sub-tabs simplificados
  programaId?: string; // Lookup a Programa
  utmCampana?: string;
  utmMedio?: string;
  utmFuente?: string;
  gclid?: string;
  fbclid?: string;
}

export interface ProgramInfo {
  titulo: string; // Titulación
  especialidad?: string;
  modalidad: 'Online' | 'Presencial' | 'Hibrido';
  convocatoriaCerem?: string;
}
