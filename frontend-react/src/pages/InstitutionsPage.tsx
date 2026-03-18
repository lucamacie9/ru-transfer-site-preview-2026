import { useEffect, useMemo, useState } from 'react'

type Institution = {
  institutionId: number | string
  name: string
  location?: string | null
}

type Program = {
  institutionId: number | string
  programId?: number | string
  id?: number | string
  programName: string
}

const BASE_API_URL = 'http://localhost:8080/api'

function formatInstitutionLabel(inst?: Institution) {
  if (!inst) return ''
  return inst.name + (inst.location ? ` (${inst.location})` : '')
}

function InstitutionsPage() {
  const [institutions, setInstitutions] = useState<Institution[]>([])
  const [programs, setPrograms] = useState<Program[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const [currentInstitutionId, setCurrentInstitutionId] = useState<string>('')
  const [targetInstitutionId, setTargetInstitutionId] = useState<string>('')
  const [targetProgramValue, setTargetProgramValue] = useState<string>('')

  const institutionsById = useMemo(() => {
    const map: Record<string, Institution> = {}
    institutions.forEach((i) => {
      map[String(i.institutionId)] = i
    })
    return map
  }, [institutions])

  const targetPrograms = useMemo(() => {
    if (!targetInstitutionId) return []
    return programs.filter(
      (p) => String(p.institutionId) === String(targetInstitutionId),
    )
  }, [programs, targetInstitutionId])

  const summary = useMemo(() => {
    if (!currentInstitutionId || !targetInstitutionId || !targetProgramValue) return ''
    const currentInst = institutionsById[String(currentInstitutionId)]
    const targetInst = institutionsById[String(targetInstitutionId)]
    const targetProgram = programs.find(
      (p) =>
        String(p.institutionId) === String(targetInstitutionId) &&
        String(p.id ?? p.programId ?? p.programName) === String(targetProgramValue),
    )

    const currentLabel =
      currentInst ? formatInstitutionLabel(currentInst) : `Institution ${currentInstitutionId}`
    const targetLabel =
      targetInst ? formatInstitutionLabel(targetInst) : `Institution ${targetInstitutionId}`
    const programLabel = targetProgram ? targetProgram.programName : `Program ${targetProgramValue}`

    return `Current: ${currentLabel} → Target: ${targetLabel} | Target Program: ${programLabel}`
  }, [currentInstitutionId, targetInstitutionId, targetProgramValue, institutionsById, programs])

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setError(null)

    Promise.all([
      fetch(`${BASE_API_URL}/institutions`).then((r) => r.json()),
      fetch(`${BASE_API_URL}/programs`).then((r) => r.json()),
    ])
      .then(([insts, progs]) => {
        if (cancelled) return
        setInstitutions((insts ?? []) as Institution[])
        setPrograms((progs ?? []) as Program[])
      })
      .catch((e) => {
        if (cancelled) return
        setError(String(e))
        setInstitutions([])
        setPrograms([])
      })
      .finally(() => {
        if (cancelled) return
        setLoading(false)
      })

    return () => {
      cancelled = true
    }
  }, [])

  useEffect(() => {
    setTargetProgramValue('')
  }, [targetInstitutionId])

  const canConfirm = Boolean(currentInstitutionId && targetInstitutionId && targetProgramValue)

  return (
    <div style={{ background: '#F8F9FA', paddingTop: 24 }}>
      <div
        style={{
          position: 'relative',
          height: 300,
          background:
            "url('https://d13kjxnqnhcmn2.cloudfront.net/AcuCustom/Sitename/DAM/055/Uni_students_-_Main.png') no-repeat center center/cover",
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          overflow: 'hidden',
          color: 'white',
          marginBottom: 32,
        }}
      >
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }} />
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            fontFamily: 'Merriweather, serif',
            fontSize: 48,
            fontWeight: 700,
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
            padding: '0 1rem',
          }}
        >
          Select Institution &amp; Program
        </div>
      </div>

      <div style={{ maxWidth: 980, margin: '0 auto', padding: '0 1rem 3rem' }}>
        <div
          style={{
            backgroundColor: '#ffffff',
            borderRadius: 10,
            padding: 24,
            boxShadow: '0 4px 8px rgba(0,0,0,0.08)',
          }}
        >
          <h3 style={{ marginTop: 0, marginBottom: 12 }}>Plan Your Transfer Path</h3>
          <p style={{ color: '#6c757d', marginTop: 0, marginBottom: 18 }}>
            Choose your <strong>current institution</strong>, your <strong>target institution</strong>, and the{' '}
            <strong>target program</strong> you want to transfer into.
          </p>

          {error ? (
            <div style={{ color: '#b42318', marginBottom: 16 }}>
              Error loading institutions/programs: {error}
            </div>
          ) : null}

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 16,
              marginBottom: 16,
            }}
          >
            <div>
              <h5 style={{ margin: '0 0 8px' }}>Current Institution</h5>
              <label style={{ display: 'block', fontSize: 14, marginBottom: 6 }}>
                Current Institution
              </label>
              <select
                value={currentInstitutionId}
                onChange={(e) => setCurrentInstitutionId(e.target.value)}
                disabled={loading || Boolean(error)}
                style={{
                  width: '100%',
                  height: 40,
                  borderRadius: 8,
                  border: '1px solid #cfcfcf',
                  padding: '0 12px',
                  background: '#fff',
                }}
              >
                <option value="">
                  {loading ? 'Loading institutions...' : 'Select Institution'}
                </option>
                {institutions.map((inst) => (
                  <option key={String(inst.institutionId)} value={String(inst.institutionId)}>
                    {formatInstitutionLabel(inst)}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <h5 style={{ margin: '0 0 8px' }}>Target Institution</h5>
              <label style={{ display: 'block', fontSize: 14, marginBottom: 6 }}>
                Target Institution
              </label>
              <select
                value={targetInstitutionId}
                onChange={(e) => setTargetInstitutionId(e.target.value)}
                disabled={loading || Boolean(error)}
                style={{
                  width: '100%',
                  height: 40,
                  borderRadius: 8,
                  border: '1px solid #cfcfcf',
                  padding: '0 12px',
                  background: '#fff',
                }}
              >
                <option value="">
                  {loading ? 'Loading institutions...' : 'Select Institution'}
                </option>
                {institutions.map((inst) => (
                  <option key={String(inst.institutionId)} value={String(inst.institutionId)}>
                    {formatInstitutionLabel(inst)}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 16,
              marginBottom: 16,
            }}
          >
            <div>
              <h5 style={{ margin: '0 0 8px' }}>Target Program</h5>
              <label style={{ display: 'block', fontSize: 14, marginBottom: 6 }}>
                Program at Target Institution
              </label>
              <select
                value={targetProgramValue}
                onChange={(e) => setTargetProgramValue(e.target.value)}
                disabled={!targetInstitutionId || loading || Boolean(error) || targetPrograms.length === 0}
                style={{
                  width: '100%',
                  height: 40,
                  borderRadius: 8,
                  border: '1px solid #cfcfcf',
                  padding: '0 12px',
                  background: '#fff',
                }}
              >
                {!targetInstitutionId ? (
                  <option value="">Select a target institution first</option>
                ) : targetPrograms.length === 0 ? (
                  <option value="">No programs for this institution</option>
                ) : (
                  <>
                    <option value="">Select Program</option>
                    {targetPrograms.map((p) => {
                      const value = String(p.id ?? p.programId ?? p.programName)
                      return (
                        <option key={`${String(p.institutionId)}:${value}`} value={value}>
                          {p.programName} (Institution ID: {String(p.institutionId)})
                        </option>
                      )
                    })}
                  </>
                )}
              </select>
            </div>
          </div>

          <div
            style={{
              marginTop: 12,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 12,
            }}
          >
            <button
              type="button"
              disabled={!canConfirm}
              onClick={() => {
                if (!canConfirm) return
                // Summary already updates via state; click is kept as a future integration hook.
              }}
              style={{
                height: 40,
                padding: '0 16px',
                borderRadius: 8,
                border: 'none',
                backgroundColor: canConfirm ? '#0d6efd' : '#9ec5fe',
                color: '#fff',
                fontWeight: 600,
                cursor: canConfirm ? 'pointer' : 'not-allowed',
              }}
            >
              Confirm Transfer Goal
            </button>

            <div style={{ color: error ? '#b42318' : '#6c757d', fontSize: 12 }}>
              {error
                ? `Error loading institutions/programs: ${error}`
                : summary || 'Select your current and target institutions, then a target program.'}
            </div>
          </div>
        </div>
      </div>

      <footer style={{ background: '#178581', color: '#fff', textAlign: 'center', padding: '6px 12px' }}>
        <p style={{ margin: 0 }}>© 2025 Transfer Credit Match. All Rights Reserved.</p>
      </footer>
    </div>
  )
}

export default InstitutionsPage
