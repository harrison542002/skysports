/**
 * @openapi
 * components:
 *  schemas:
 *    League:
 *      type: Object
 *      properties:
 *        league_id:
 *          type: integer
 *          example: 1
 *        league_name:
 *          type: string
 *          example: Preimium League
 *        league_logo:
 *          type: string
 *          example: URL
 *        season:
 *          type: string
 *          example: 2023/2024
 *        slug:
 *          type: string
 *          example: preimium-league
 */

/**
 * @openapi
 * components:
 *  schemas:
 *    LeagueWithStanding:
 *      type: Object
 *      properties:
 *        league_id:
 *          type: integer
 *          example: 1
 *        league_name:
 *          type: string
 *          example: Preimium League
 *        league_logo:
 *          type: string
 *          example: URL
 *        season:
 *          type: string
 *          example: 2023/2024
 *        slug:
 *          type: string
 *          example: preimium-league
 *        standing:
 *          type: array
 *          items:
 *            - $ref: '#/components/schemas/Standing'
 */

/**
 * @openapi
 * components:
 *  schemas:
 *    Standing:
 *      type: Object
 *      properties:
 *        standing_id:
 *          type: integer
 *          example: 1
 *        team_name:
 *          type: string
 *          example: Arsenal
 *        played:
 *          type: integer
 *          example: 1
 *        won:
 *          type: integer
 *          example: 28
 *        draw:
 *          type: integer
 *          example: 4
 *        lost:
 *          type: integer
 *          example: 4
 *        goals_for:
 *          type: integer
 *          example: 70
 *        goals_against:
 *          type: integer
 *          example: 24
 *        goals_diff:
 *          type: integer
 *          example: 24
 *        points:
 *          type: integer
 *          example: 64
 *        detail_url:
 *          type: string
 *          example: /arsenal
 */
