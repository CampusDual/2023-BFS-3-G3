package com.campusdual.backend.model.core.dao;

import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;

@Repository(value = "RouteDao")
@Lazy
@ConfigurationFile( configurationFile = "dao/RoutesDao.xml",
        configurationFilePlaceholder = "dao/placeholders.properties")
public class RoutesDao extends OntimizeJdbcDaoSupport {
    public static final String ATTR_ID = "id";
    public static final String ATTR_PERMISSIONID = "permissionid";
    public static final String ATTR_ENABLED = "enabled";
    public static final String ATTR_ROLENAME = "rolename";
    public static final String ATTR_ID_ROLENAME = "id_rolename";
}
