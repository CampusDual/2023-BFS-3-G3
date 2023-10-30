package com.campusdual.backend.api.core.service;

import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;

import java.util.List;
import java.util.Map;

public interface IGymService {
    public EntityResult gymQuery(Map<String, Object> keyMap, List<String> attrList) throws OntimizeJEERuntimeException;
    public EntityResult gymInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException;
    public EntityResult gymUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap) throws OntimizeJEERuntimeException;
    public EntityResult gymDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException;
}
