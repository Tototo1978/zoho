import { Lead, ProgramInfo } from './leadInterface';

// Ejemplo de lead con información básica y programa relacionado
const lead: Lead = {
  nombreLead: 'Programa XYZ - Online - Marca A',
  gestionManual: false,
  contactoId: 'contacto123',
  nombre: 'Juan',
  apellidos: 'Pérez',
  direccion: 'España, Madrid',
  correoElectronico: 'juan.perez@example.com',
  movil: '+34123456789',
  telefono: '+34987654321',
  comercialId: 'user1',
  equipoVentasId: 'teamA',
  unidadOperacion: 'Euroinnova S.L.',
  estado: 'Nuevo',
  calificacion: 80,
  prioridad: 4,
  etiquetas: ['campaña verano', 'evento feria'],
  programaId: 'prog1',
  utmCampana: 'verano2024',
  utmMedio: 'email',
  utmFuente: 'newsletter',
  gclid: 'abcd1234',
  fbclid: 'efgh5678'
};

const programa: ProgramInfo = {
  titulo: 'Máster en Gestión',
  especialidad: 'Dirección',
  modalidad: 'Online',
  convocatoriaCerem: '2024'
};

console.log('Lead:', lead);
console.log('Programa:', programa);
