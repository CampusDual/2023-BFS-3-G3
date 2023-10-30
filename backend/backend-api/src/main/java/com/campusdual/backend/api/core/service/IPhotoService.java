package com.campusdual.backend.api.core.service;

import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;

import java.util.List;
import java.util.Map;

public interface IPhotoService {
    public EntityResult photoQuery(Map<String, Object> keyMap, List<String> attrList) throws OntimizeJEERuntimeException;
    public EntityResult photoInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException;
    public EntityResult photoUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap) throws OntimizeJEERuntimeException;
    public EntityResult photoDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException;
}
