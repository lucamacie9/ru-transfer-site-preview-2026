package com.transfercreditmatch.controllers;

import com.transfercreditmatch.entities.Institution;
import com.transfercreditmatch.entities.Program;
import com.transfercreditmatch.entities.KnowledgeUnit;
import com.transfercreditmatch.repositories.InstitutionRepository;
import com.transfercreditmatch.repositories.ProgramRepository;
import com.transfercreditmatch.repositories.KnowledgeUnitRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class NavigationController {

    private final InstitutionRepository institutionRepo;
    private final ProgramRepository programRepo;
    private final KnowledgeUnitRepository kuRepo;

    public NavigationController(InstitutionRepository institutionRepo,
                                ProgramRepository programRepo,
                                KnowledgeUnitRepository kuRepo) {
        this.institutionRepo = institutionRepo;
        this.programRepo = programRepo;
        this.kuRepo = kuRepo;
    }

    // -------------------------------------------------------------------------
    // INSTITUTIONS
    // -------------------------------------------------------------------------

    // GET /api/institutions - List all
    @GetMapping("/institutions")
    public List<Institution> getAllInstitutions() {
        return institutionRepo.findAll();
    }

    // GET /api/institutions/{id} - Get one
    @GetMapping("/institutions/{id}")
    public ResponseEntity<Institution> getInstitutionById(@PathVariable Integer id) {
        Institution institution = institutionRepo.findById(id)
            .orElseThrow(() -> new RuntimeException("Institution not found with ID: " + id));
        return ResponseEntity.ok(institution);
    }

    // POST /api/institutions - Create new
    @PostMapping("/institutions")
    public ResponseEntity<Institution> createInstitution(@RequestBody Institution institution) {
        Institution saved = institutionRepo.save(institution);
        return ResponseEntity.ok(saved);
    }

    // PUT /api/institutions/{id} - Update existing
    @PutMapping("/institutions/{id}")
    public ResponseEntity<Institution> updateInstitution(@PathVariable Integer id,
                                                         @RequestBody Institution updatedData) {
        Institution existing = institutionRepo.findById(id)
            .orElseThrow(() -> new RuntimeException("Institution not found with ID: " + id));

        // Update fields
        existing.setName(updatedData.getName());
        existing.setLocation(updatedData.getLocation());

        Institution saved = institutionRepo.save(existing);
        return ResponseEntity.ok(saved);
    }

    // DELETE /api/institutions/{id} - Delete
    @DeleteMapping("/institutions/{id}")
    public ResponseEntity<String> deleteInstitution(@PathVariable Integer id) {
        institutionRepo.deleteById(id);
        return ResponseEntity.ok("Institution with ID " + id + " has been deleted.");
    }

    // -------------------------------------------------------------------------
    // PROGRAMS
    // -------------------------------------------------------------------------

    // GET /api/programs - List all
    @GetMapping("/programs")
    public List<Program> getAllPrograms() {
        return programRepo.findAll();
    }

    // GET /api/programs/{id} - Get one
    @GetMapping("/programs/{id}")
    public ResponseEntity<Program> getProgramById(@PathVariable Integer id) {
        Program program = programRepo.findById(id)
            .orElseThrow(() -> new RuntimeException("Program not found with ID: " + id));
        return ResponseEntity.ok(program);
    }

    // POST /api/programs - Create new
    @PostMapping("/programs")
    public ResponseEntity<Program> createProgram(@RequestBody Program program) {
        Program saved = programRepo.save(program);
        return ResponseEntity.ok(saved);
    }

    // PUT /api/programs/{id} - Update existing
    @PutMapping("/programs/{id}")
    public ResponseEntity<Program> updateProgram(@PathVariable Integer id,
                                                 @RequestBody Program updatedData) {
        Program existing = programRepo.findById(id)
            .orElseThrow(() -> new RuntimeException("Program not found with ID: " + id));

        // Update fields
        existing.setProgramName(updatedData.getProgramName());
        existing.setInstitutionId(updatedData.getInstitutionId());

        Program saved = programRepo.save(existing);
        return ResponseEntity.ok(saved);
    }

    // DELETE /api/programs/{id} - Delete
    @DeleteMapping("/programs/{id}")
    public ResponseEntity<String> deleteProgram(@PathVariable Integer id) {
        programRepo.deleteById(id);
        return ResponseEntity.ok("Program with ID " + id + " has been deleted.");
    }

    // -------------------------------------------------------------------------
    // KNOWLEDGE UNITS (GET ONLY)
    // -------------------------------------------------------------------------

    // GET /api/knowledge_units - List all
    @GetMapping("/knowledge_units")
    public List<KnowledgeUnit> getAllKnowledgeUnits() {
        return kuRepo.findAll();
    }
}

