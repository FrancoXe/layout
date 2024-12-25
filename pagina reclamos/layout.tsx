'use client'

import { FileText, Clock, History, Users, BarChart3, Menu, Bell, User, HelpCircle, LogOut, Moon, Sun, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Loader } from './components/loader'
import { useTheme } from './lib/theme'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [helpOpen, setHelpOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false) // Update 1
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
      {/* Header */}
      <header className={`fixed top-0 z-50 w-full ${theme === 'dark' ? 'bg-black border-neutral-800' : 'bg-white border-gray-200'} border-b px-4 h-14 flex items-center justify-between`}>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className={`p-2 ${theme === 'dark' ? 'hover:bg-neutral-800' : 'hover:bg-gray-100'} rounded-full`}
          >
            <Menu className="w-6 h-6" />
          </button>
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-rg-preview.PNG-hIJxzs47VAvgcxXgOKkhmwGsdEzcHP.png"
              alt="Logo Reclamos"
              width={50}
              height={50}
              className="object-contain"
              priority
            />
            <span className={`text-lg font-medium ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Municipalidad de Unquillo</span>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <button className={`p-2 ${theme === 'dark' ? 'hover:bg-neutral-800' : 'hover:bg-gray-100'} rounded-full`}>
            <Bell className="w-6 h-6" />
          </button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className={`p-2 ${theme === 'dark' ? 'hover:bg-neutral-800' : 'hover:bg-gray-100'} rounded-full flex items-center justify-center`}>
                <User className="w-6 h-6" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className={`w-56 ${theme === 'dark' ? 'bg-neutral-900 text-white border-neutral-800' : 'bg-white text-black border-gray-200'} border`}>
              <div className={`px-2 py-2 text-sm font-medium border-b ${theme === 'dark' ? 'border-neutral-800' : 'border-gray-200'}`}>Mi cuenta</div>
              <DropdownMenuItem className={`gap-2 ${theme === 'dark' ? 'hover:bg-neutral-800' : 'hover:bg-gray-100'}`} onSelect={() => setProfileOpen(true)}> {/* Update 2 */}
                <User className="w-4 h-4" />
                Mi perfil
              </DropdownMenuItem>
              <DropdownMenuItem className={`gap-2 ${theme === 'dark' ? 'hover:bg-neutral-800' : 'hover:bg-gray-100'}`} onSelect={() => setHelpOpen(true)}>
                <HelpCircle className="w-4 h-4" />
                Ayuda
              </DropdownMenuItem>
              <DropdownMenuItem className={`gap-2 flex justify-between items-center ${theme === 'dark' ? 'hover:bg-neutral-800' : 'hover:bg-gray-100'}`} onSelect={toggleTheme}>
                <div className="flex items-center gap-2">
                  <Moon className="w-4 h-4" />
                  <span>Tema oscuro</span>
                </div>
                <div className={`w-9 h-5 rounded-full transition-colors duration-200 ${theme === 'dark' ? 'bg-[rgb(255,120,10)]' : 'bg-gray-200'} relative flex items-center`}>
                  <div className={`w-4 h-4 rounded-full transition-transform duration-200 absolute ${theme === 'dark' ? 'bg-white translate-x-4 left-0.5' : 'bg-[rgb(255,120,10)] left-0.5'} top-1/2 -translate-y-1/2`} />
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className={`gap-2 ${theme === 'dark' ? 'hover:bg-neutral-800' : 'hover:bg-gray-100'}`}>
                <LogOut className="w-4 h-4" />
                Cerrar sesión
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      {/* Help Dialog */}
      <Dialog open={helpOpen} onOpenChange={setHelpOpen}>
        <DialogContent className={`max-w-3xl ${theme === 'dark' ? 'bg-neutral-900 text-white' : 'bg-white text-black'}`}>
          <DialogHeader>
            <DialogTitle>Centro de Ayuda</DialogTitle>
            <DialogDescription>
              Encuentra respuestas a preguntas frecuentes y guías sobre cómo usar el sistema de reclamos.
            </DialogDescription>
          </DialogHeader>
          <Card className={`w-full ${theme === 'dark' ? 'bg-neutral-800 text-white' : 'bg-gray-100 text-black'}`}>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>¿Cómo presento un nuevo reclamo?</AccordionTrigger>
                  <AccordionContent>
                    <ol className="list-decimal list-inside space-y-2">
                      <li>Inicia sesión en tu cuenta.</li>
                      <li>Haz clic en "Nuevo Reclamo" en el menú lateral.</li>
                      <li>Completa el formulario con los detalles de tu reclamo.</li>
                      <li>Adjunta cualquier documento o imagen relevante.</li>
                      <li>Haz clic en "Enviar Reclamo".</li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>¿Cómo reviso el estado de mis reclamos existentes?</AccordionTrigger>
                  <AccordionContent>
                    <ol className="list-decimal list-inside space-y-2">
                      <li>Inicia sesión en tu cuenta.</li>
                      <li>Haz clic en "Mis Reclamos" en el menú lateral.</li>
                      <li>Verás una lista de todos tus reclamos con su estado actual.</li>
                      <li>Puedes hacer clic en "Ver más" para obtener detalles adicionales sobre cada reclamo.</li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>¿Qué significan los diferentes estados de un reclamo?</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc list-inside space-y-2">
                      <li><strong>Pendiente:</strong> Tu reclamo ha sido recibido pero aún no ha sido procesado.</li>
                      <li><strong>En Proceso:</strong> Tu reclamo está siendo revisado y trabajado por nuestro equipo.</li>
                      <li><strong>Resuelto:</strong> Tu reclamo ha sido atendido y solucionado.</li>
                      <li><strong>Rechazado:</strong> Tu reclamo no pudo ser procesado o no cumple con los criterios necesarios.</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Consejos para describir correctamente un reclamo</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Sé específico sobre el problema y su ubicación.</li>
                      <li>Incluye la fecha y hora en que notaste el problema.</li>
                      <li>Describe cualquier acción que hayas tomado o intentado.</li>
                      <li>Explica cómo te afecta el problema.</li>
                      <li>Sugiere una solución si tienes una en mente.</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>¿Qué documentación debo adjuntar a mi reclamo?</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Fotos o videos que muestren claramente el problema.</li>
                      <li>Documentos oficiales relacionados con el reclamo (si aplica).</li>
                      <li>Recibos o facturas relevantes.</li>
                      <li>Cualquier correspondencia previa sobre el asunto.</li>
                      <li>Asegúrate de que los archivos estén en un formato común (jpg, png, pdf) y no excedan 5MB por archivo.</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </DialogContent>
      </Dialog>

      {/* Profile Dialog */} {/* Update 3 */}
      <Dialog open={profileOpen} onOpenChange={setProfileOpen}>
        <DialogContent className={`max-w-2xl ${theme === 'dark' ? 'bg-neutral-900 text-white' : 'bg-white text-black'}`}>
          <div className={`rounded-lg ${theme === 'dark' ? 'bg-neutral-900' : 'bg-white'}`}>
            {/* Información básica */}
            <div className="p-6">
              <h2 className={`text-lg font-medium mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Información básica
              </h2>

              {/* Imagen de perfil */}
              <div className="flex items-center justify-between py-4 cursor-pointer group">
                <div>
                  <div className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>
                    Imagen de perfil
                  </div>
                  <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                    Una foto de perfil ayuda a personalizar tu cuenta
                  </div>
                </div>
                <div className={`size-10 rounded-full flex items-center justify-center ${theme === 'dark' ? 'bg-neutral-800' : 'bg-gray-100'}`}>
                  <User className={`size-6 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`} />
                </div>
              </div>

              <div className={`h-px ${theme === 'dark' ? 'bg-neutral-800' : 'bg-gray-200'}`} />

              {/* Nombre */}
              <div className="flex items-center justify-between py-4 cursor-pointer group">
                <div>
                  <div className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>
                    Nombre
                  </div>
                  <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                    Nombre Apellido
                  </div>
                </div>
                <ChevronRight className={`size-5 ${theme === 'dark' ? 'text-gray-600' : 'text-gray-400'} group-hover:text-gray-500`} />
              </div>

              <div className={`h-px ${theme === 'dark' ? 'bg-neutral-800' : 'bg-gray-200'}`} />

              {/* Dirección */}
              <div className="flex items-center justify-between py-4 cursor-pointer group">
                <div>
                  <div className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>
                    Dirección
                  </div>
                  <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                    Sin configurar
                  </div>
                </div>
                <ChevronRight className={`size-5 ${theme === 'dark' ? 'text-gray-600' : 'text-gray-400'} group-hover:text-gray-500`} />
              </div>
            </div>

            {/* Información de contacto */}
            <div className={`h-2 ${theme === 'dark' ? 'bg-black' : 'bg-gray-50'}`} />

            <div className="p-6">
              <h2 className={`text-lg font-medium mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Información de contacto
              </h2>

              {/* Correo electrónico */}
              <div className="flex items-center justify-between py-4 cursor-pointer group">
                <div>
                  <div className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>
                    Correo electrónico
                  </div>
                  <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                    ejemplo123@gmail.com
                  </div>
                </div>
                <ChevronRight className={`size-5 ${theme === 'dark' ? 'text-gray-600' : 'text-gray-400'} group-hover:text-gray-500`} />
              </div>

              <div className={`h-px ${theme === 'dark' ? 'bg-neutral-800' : 'bg-gray-200'}`} />

              {/* Teléfono */}
              <div className="flex items-center justify-between py-4 cursor-pointer group">
                <div>
                  <div className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>
                    Teléfono
                  </div>
                  <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                    0351 123-4567
                  </div>
                </div>
                <ChevronRight className={`size-5 ${theme === 'dark' ? 'text-gray-600' : 'text-gray-400'} group-hover:text-gray-500`} />
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-14 h-[calc(100vh-3.5rem)] ${theme === 'dark' ? 'bg-black border-neutral-800' : 'bg-white border-gray-200'} border-r transition-all duration-300 ${
          isSidebarOpen ? 'w-64' : 'w-16'
        }`}
      >
        <nav className="p-2 space-y-2">
          <Link
            href="/nuevo-reclamo"
            className={`flex items-center gap-4 p-3 rounded-lg ${theme === 'dark' ? 'hover:bg-neutral-800' : 'hover:bg-gray-100'} overflow-hidden whitespace-nowrap`}
          >
            <FileText className="w-6 h-6 flex-shrink-0" />
            <span className={`transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100' : 'opacity-0'}`}>Nuevo Reclamo</span>
          </Link>
          <Link
            href="/pendientes"
            className={`flex items-center gap-4 p-3 rounded-lg ${theme === 'dark' ? 'hover:bg-neutral-800' : 'hover:bg-gray-100'} overflow-hidden whitespace-nowrap`}
          >
            <Clock className="w-6 h-6 flex-shrink-0" />
            <span className={`transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100' : 'opacity-0'}`}>Pendientes</span>
          </Link>
          <Link
            href="/historial"
            className={`flex items-center gap-4 p-3 rounded-lg ${theme === 'dark' ? 'hover:bg-neutral-800' : 'hover:bg-gray-100'} overflow-hidden whitespace-nowrap`}
          >
            <History className="w-6 h-6 flex-shrink-0" />
            <span className={`transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100' : 'opacity-0'}`}>Historial</span>
          </Link>
          <Link
            href="/usuarios"
            className={`flex items-center gap-4 p-3 rounded-lg ${theme === 'dark' ? 'hover:bg-neutral-800' : 'hover:bg-gray-100'} overflow-hidden whitespace-nowrap`}
          >
            <Users className="w-6 h-6 flex-shrink-0" />
            <span className={`transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100' : 'opacity-0'}`}>Usuarios</span>
          </Link>
          <Link
            href="/reportes"
            className={`flex items-center gap-4 p-3 rounded-lg ${theme === 'dark' ? 'hover:bg-neutral-800' : 'hover:bg-gray-100'} overflow-hidden whitespace-nowrap`}
          >
            <BarChart3 className="w-6 h-6 flex-shrink-0" />
            <span className={`transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100' : 'opacity-0'}`}>Reportes</span>
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main
        className={`pt-14 min-h-screen transition-all duration-300 ${
          theme === 'dark' ? 'bg-neutral-900' : 'bg-gray-100'
        } ${
          isSidebarOpen ? 'ml-64' : 'ml-16'
        }`}
      >
        <div className="p-6">
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <h1 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Bienvenido</h1>
              <p className={`mt-4 ${theme === 'dark' ? 'text-neutral-400' : 'text-gray-600'}`}>
                Acá puedes administrar reclamos y usuarios.
              </p>
            </>
          )}
        </div>
      </main>
    </div>
  )
}

